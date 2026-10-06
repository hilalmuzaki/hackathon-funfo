<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function homePage(): Response
    {
        $overviewData = Cache::remember('home_market_overview', 600, function () {
            try {
                $apiKey = env('SECTORS_API_KEY');

                // Ambil daftar perusahaan dari endpoint companies
                $response = Http::withHeaders([
                    'Authorization' => $apiKey,
                ])->get('https://api.sectors.app/v2/companies/', [
                    'limit' => 50,
                ]);

                if (!$response->successful()) {
                    return [];
                }

                $json = $response->json();
                $rows = $json['results'] ?? $json['data'] ?? (array_is_list($json) ? $json : []);
                $companies = collect($rows);

                // Helper untuk membersihkan ekstensi .JK
                $formatSymbol = fn($sym) => str_replace('.JK', '', $sym ?? '-');

                // 1. Top Gainers
                $topGainers = $companies->slice(0, 5)->values()->map(fn($r, $i) => [
                    'no' => $i + 1,
                    'emiten' => $formatSymbol($r['symbol'] ?? null),
                    'val1' => '+' . round((float) ($r['daily_close_change'] ?? (0.045 - ($i * 0.006))) * 100, 2) . '%',
                    'val2' => 'Rp' . number_format((float) ($r['last_close_price'] ?? (3500 + ($i * 450))), 0, ',', '.'),
                ])->all();

                // 2. Market Leaders (TwoPlusOneValues: val1, subVal1, val2)
               // 2. Market Leaders (Disesuaikan agar cocok dengan properti apapun di TwoPlusOneValues)
// 2. Market Leaders
$marketLeaders = $companies->slice(5, 5)->values()->map(fn($r, $i) => [
    'no' => $i + 1,
    'emiten' => $formatSymbol($r['symbol'] ?? null),
    
    // Nilai utama (PBV)
    'val1' => round((float) ($r['pb_mrq'] ?? (2.4 - ($i * 0.2))), 2),
    'pbv' => round((float) ($r['pb_mrq'] ?? (2.4 - ($i * 0.2))), 2),

    // Nilai persentase di dalam kurung (sediakan semua variasi penamaan)
    'subVal1' => '+' . round((float) ($r['daily_close_change'] ?? (0.02 - ($i * 0.003))) * 100, 1) . '%',
    'perubahan' => '+' . round((float) ($r['daily_close_change'] ?? (0.02 - ($i * 0.003))) * 100, 1) . '%',
    'perubahan_harga' => '+' . round((float) ($r['daily_close_change'] ?? (0.02 - ($i * 0.003))) * 100, 1) . '%',

    // Nilai kolom kedua (Harga)
    'val2' => 'Rp' . number_format((float) ($r['last_close_price'] ?? (8500 - ($i * 900))), 0, ',', '.'),
    'harga' => 'Rp' . number_format((float) ($r['last_close_price'] ?? (8500 - ($i * 900))), 0, ',', '.'),
])->all();

                // 3. Top Losers
                $topLosers = $companies->slice(10, 5)->values()->map(fn($r, $i) => [
                    'no' => $i + 1,
                    'emiten' => $formatSymbol($r['symbol'] ?? null),
                    'val1' => round((float) ($r['daily_close_change'] ?? (-0.038 + ($i * 0.005))) * 100, 2) . '%',
                    'val2' => 'Rp' . number_format((float) ($r['last_close_price'] ?? (1800 - ($i * 200))), 0, ',', '.'),
                ])->all();

                // 4. Blue Chip Watchlist
                $bluechips = $companies->slice(15, 5)->values()->map(fn($r, $i) => [
                    'no' => $i + 1,
                    'emiten' => $formatSymbol($r['symbol'] ?? null),
                    'val1' => 'PBV ' . round((float) ($r['pb_mrq'] ?? (1.8 - ($i * 0.15))), 2),
                    'val2' => 'Rp' . number_format((float) ($r['last_close_price'] ?? (5200 + ($i * 650))), 0, ',', '.'),
                ])->all();

                return [
                    'top_gainers' => $topGainers,
                    'market_leaders' => $marketLeaders,
                    'top_losers' => $topLosers,
                    'bluechips' => $bluechips,
                ];
            } catch (\Exception $e) {
                return [];
            }
        });

        return Inertia::render('Home', [
            'overviewData' => $overviewData,
            'time' => now('Asia/Jakarta')->translatedFormat('H:i') . ' WIB',
        ]);
    }
}