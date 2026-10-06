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
                // Tambahkan ?on_conflict=user_id agar PostgREST tahu kolom acuan upsert
                $response = Http::withHeaders([
                    'apikey' => $supabaseKey,
                    'Authorization' => 'Bearer ' . $supabaseKey,
                    'Content-Type' => 'application/json',
                    'Prefer' => 'resolution=merge-duplicates',
                ])->post("{$supabaseUrl}?on_conflict=user_id", [
                    'user_id' => (string) $user->id,
                    'telegram_chat_id' => (string) $chatId,
                ]);

                if (!$response->successful()) {
                    \Log::error('Supabase Error: ' . $response->body());
                }
            } else {
                // Hapus data jika dinonaktifkan atau chat ID dikosongkan
                Http::withHeaders([
                    'apikey' => $supabaseKey,
                    'Authorization' => 'Bearer ' . $supabaseKey,
                ])->delete("{$supabaseUrl}?user_id=eq.{$user->id}");
            }
        } catch (\Throwable $th) {
            report($th);
        }

        return back()->with('status', 'subscription-updated');
    }
}