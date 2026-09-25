import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className="card-parent-1">
            <div className="section-child-1">
                <header>
                    <h2 className="text-lg font-bold">Hapus akun</h2>

                    <p className="mt-1 text-sm">
                        Setelah akun ini dihapus, semua data akan dihapus secara
                        permanen. Harap masukkan kata sandi kamu untuk
                        mengonfirmasi bahwa kamu ingin menghapus akun ini secara
                        permanen.
                    </p>
                </header>

                <DangerButton onClick={confirmUserDeletion}>
                    Hapus akun
                </DangerButton>

                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-lg font-medium">
                            Kamu yakin ingin menghapus akun ini?
                        </h2>

                        <p className="mt-1 text-sm">
                            Setelah akun ini dihapus, semua data akan dihapus
                            secara permanen. Harap masukkan kata sandi kamu
                            untuk mengonfirmasi bahwa kamu ingin menghapus akun
                            ini secara permanen.
                        </p>

                        <div className="mt-6">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Batal
                            </SecondaryButton>

                            <DangerButton
                                className="ms-3"
                                disabled={processing}
                            >
                                Hapus akun
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </section>
    );
}
