<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AlertSubscription;
use Illuminate\Http\JsonResponse;

class AlertSubscriberApiController extends Controller
{
    /**
     * Return the list of active alert subscribers for the n8n workflows.
     *
     * GET /api/alert-subscribers
     */
    public function index(): JsonResponse
    {
        $subscribers = AlertSubscription::query()
            ->where('is_active', true)
            ->whereNotNull('telegram_chat_id')
            ->where('telegram_chat_id', '!=', '')
            ->with('user:id,name,username,email')
            ->get()
            ->map(function (AlertSubscription $subscription) {
                return [
                    'user_id' => $subscription->user_id,
                    'name' => $subscription->user?->name,
                    'username' => $subscription->user?->username,
                    'telegram_chat_id' => $subscription->telegram_chat_id,
                ];
            })
            ->values();

        return response()->json([
            'count' => $subscribers->count(),
            'subscribers' => $subscribers,
        ]);
    }
}
