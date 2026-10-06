<?php

namespace App\Http\Controllers;

use App\Models\AlertSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AlertSubscriptionController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'telegram_chat_id' => 'nullable|string|max:50',
            'is_active' => 'nullable|boolean',
        ]);

        $user = $request->user();
        $user->load('alertSubscription');

        $isActive = (bool) ($validated['is_active'] ?? false);
        $chatId = $validated['telegram_chat_id'] ?? null;

        // 1. Simpan ke database lokal
        $subscription = $user->alertSubscription ?? new AlertSubscription();
        $subscription->user_id = $user->id;
        $subscription->telegram_chat_id = $chatId;
        $subscription->is_active = $isActive;
        $subscription->save();

        // 2. Sinkronisasi ke Supabase untuk n8n
        $supabaseUrl = 'https://kddpfltcczgwptkrovav.supabase.co/rest/v1/alert_subscriptions';
        $supabaseKey = 'sb_publishable_iF-sOOjfJwL5r0PDPckq7A_t-03Xr9z';

        try {
            if ($isActive && !empty($chatId)) {
                // Upsert data subscriber aktif ke Supabase
                Http::withHeaders([
                    'apikey' => $supabaseKey,
                    'Authorization' => 'Bearer ' . $supabaseKey,
                    'Content-Type' => 'application/json',
                    'Prefer' => 'resolution=merge-duplicates',
                ])->post($supabaseUrl, [
                    'user_id' => (string) $user->id,
                    'telegram_chat_id' => (string) $chatId,
                ]);
            } else {
                // Hapus data jika dinonaktifkan atau chat ID dikosongkan
                Http::withHeaders([
                    'apikey' => $supabaseKey,
                    'Authorization' => 'Bearer ' . $supabaseKey,
                ])->delete("{$supabaseUrl}?user_id=eq.{$user->id}");
            }
        } catch (\Throwable $th) {
            // Hindari memblokir user jika jaringan Supabase bermasalah
            report($th);
        }

        return back()->with('status', 'subscription-updated');
    }
}