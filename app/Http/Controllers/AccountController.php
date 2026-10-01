<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AccountController extends Controller
{
    public function accountPage(Request $request): Response
    {
        $user = $request->user();
        $user->load('alertSubscription');

        return Inertia::render('Account', [
            'subscription' => $user->alertSubscription?->only([
                'telegram_chat_id',
                'is_active',
            ]) ?? [
                'telegram_chat_id' => null,
                'is_active' => false,
            ],
        ]);
    }
}
