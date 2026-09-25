import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            username: user.username,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className="card-parent-1">
            <div className="section-child-1">
                <header>
                    <h2 className="text-lg font-bold">Informasi Pribadi</h2>

                    <p className="mt-1 info-1">
                        Kamu bisa ubah informasi pribadi di sini.
                    </p>
                </header>

                <form onSubmit={submit} className="div-context-parent-1">
                    <div>
                        <InputLabel htmlFor="name" value="Nama" />

                        <TextInput
                            id="name"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoComplete="name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="username" value="Nama pengguna" />

                        <TextInput
                            id="username"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.username}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                            required
                            autoComplete="username"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.username}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="mt-2 text-sm">
                                Email kamu tidak terverifikasi.
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="rounded-md text-sm underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Klik ini untuk mengirim ulang link verifikasi.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 text-sm font-medium text-green-600">
                                    Link verifikasi terbaru telah dikirim ke
                                    email kamu.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing}>
                            Simpan
                        </PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm">Perubah telah disimpan</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </section>
    );
}
