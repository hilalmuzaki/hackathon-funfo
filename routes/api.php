<?php

use App\Http\Controllers\Api\AlertSubscriberApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Consumed by the n8n automation workflows to fetch the list of active
| Telegram alert subscribers for multi-user distribution.
|
*/

Route::get('/alert-subscribers', [AlertSubscriberApiController::class, 'index'])
    ->name('api.alert-subscribers');
