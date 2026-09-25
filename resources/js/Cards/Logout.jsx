import { useState } from "react";
import { useForm } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { Button } from "@headlessui/react";

export default function Logout() {
    const [confirmingLogout, setConfirmingLogout] = useState(false);
    const { post, processing, reset } = useForm();

    const confirmLogout = () => {
        setConfirmingLogout(true);
    };

    const logout = (e) => {
        e.preventDefault();

        post(route("logout"), {
            onFinish: () => {
                reset();
                setConfirmingLogout(false);
            },
        });
    };

    const closeModal = () => {
        setConfirmingLogout(false);
        reset();
    };

    return (
        <section className="">
            <Button onClick={confirmLogout} className="card-parent-1 hover:opacity-80">Keluar</Button>

            <Modal show={confirmingLogout} onClose={closeModal} focusable>
                <form onSubmit={logout} className="p-6">
                    <h2 className="text-lg font-medium text-third">
                        Kamu yakin ingin keluar?
                    </h2>

                    <div className="mt-10 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Batal
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Keluar
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
