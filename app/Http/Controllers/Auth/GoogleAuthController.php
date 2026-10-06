<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();

            // 1. Cari user berdasarkan google_id atau email
            $user = User::where('google_id', $googleUser->getId())
                ->orWhere('email', $googleUser->getEmail())
                ->first();

            if ($user) {
                // Update jika google_id belum terpasang
                $user->google_id = $googleUser->getId();
                
                // Pastikan status email terverifikasi
                if (is_null($user->email_verified_at)) {
                    $user->email_verified_at = now();
                }
                
                $user->save();
            } else {
                // Buat username dari nama/email Google (misal: dani_4821)
                $baseUsername = Str::slug($googleUser->getName(), '_') ?: explode('@', $googleUser->getEmail())[0];
                $username = $baseUsername . '_' . Str::lower(Str::random(4));

                // 2. Buat user baru lengkap dengan username & email_verified_at
                $user = User::create([
                    'name'              => $googleUser->getName() ?? $username,
                    'username'          => $username, // Menghindari error NOT NULL kolom username
                    'email'             => $googleUser->getEmail(),
                    'google_id'         => $googleUser->getId(),
                    'email_verified_at' => now(), // Memenuhi syarat MustVerifyEmail
                    'password'          => bcrypt(Str::random(24)),
                ]);
            }

            // 3. Login-kan user ke sistem sesi Laravel
            Auth::login($user, true);

            // 4. Regenerasi ID sesi
            request()->session()->regenerate();

            // 5. Arahkan langsung ke halaman beranda
            return redirect()->route('home');

        } catch (\Throwable $e) {
            // Jika ada kendala, cetak error ke layar untuk penelusuran langsung
            dd([
                'pesan' => $e->getMessage(),
                'file'  => $e->getFile(),
                'line'  => $e->getLine(),
            ]);
        }
    }
}