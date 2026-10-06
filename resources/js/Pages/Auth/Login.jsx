import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="user_id" value="Nama pengguna atau email" />

                    <TextInput
                        id="user_id"
                        type="text"
                        name="user_id"
                        value={data.user_id}
                        className="mt-1 block w-full"
                        autoComplete="user_id"
                        isFocused={true}
                        onChange={(e) => setData('user_id', e.target.value)}
                    />

                    <InputError message={errors.user_id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Kata sandi" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            className="rounded-lg border-slate-300 text-slate-900 focus:ring-slate-900"
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-white1/50">
                            Ingatlah saya
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end text-sm gap-1">
                    <span className="text-white1/60">Lupa kata sandi?</span>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-white1 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Klik ini
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Login
                    </PrimaryButton>
                </div>
            </form>

            {/* Divider Pemisah - Menggunakan background transparan/cocok dengan card */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-black1 dark:border-white1" />
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                    <span className="bg-black1 dark:bg-white1 px-3 text-white1 dark:text-black1 font-semibold rounded-full">
                        Atau lanjutkan dengan
                    </span>
                </div>
            </div>

            {/* Tombol Login with Google yang menyatu dengan style card */}
            <div>
                <a
                    href={route('auth.google')}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-white active:scale-[0.99] transition duration-150"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            fill="#EA4335"
                        />
                    </svg>
                    <span>Masuk dengan Google</span>
                </a>
            </div>
        </AuthLayout>
    );
}