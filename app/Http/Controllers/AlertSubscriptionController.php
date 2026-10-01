<?php

namespace App\Http\Controllers;

use App\Models\AlertSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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

        $subscription = $user->alertSubscription ?? new AlertSubscription();
        $subscription->user_id = $user->id;
        $subscription->telegram_chat_id = $validated['telegram_chat_id'] ?? null;
        $subscription->is_active = $validated['is_active'] ?? $subscription->is_active ?? false;
        $subscription->save();

        return back()->with('status', 'subscription-updated');
    }
}
