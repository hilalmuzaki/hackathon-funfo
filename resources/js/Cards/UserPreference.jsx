import { useState } from "react";
import { useForm } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { Button } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function UserPreference() {
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
        <section className="card-parent-1">
            <div className="div-context-parent-1">
                <h2 className="title-size-1 font-bold">Preferensi Parameter</h2>

                <div className="div-context-child-1">
                    <p className="info-1">Max. anjlok (%)</p>
                    <p className="body-size-1">300%</p>
                </div>
            </div>

            <Button
                onClick={confirmLogout}
                className="flex flex-row gap-1 items-center text-left w-fit hover:opacity-80"
            >
                <PencilSquareIcon className="size-5" /> Edit preferensi
            </Button>

            <Modal show={confirmingLogout} onClose={closeModal} focusable>
                <form onSubmit={logout} className="p-6 section-child-1">
                    <h2 className="title-size-1 font-bold">
                        Preferensi Parameter
                    </h2>

                    <div className="div-context-child-1">
                        <p className="info-1">Max. anjlok (%)</p>
                        <p className="body-size-1">300%</p>
                    </div>

                    <div className="mt-10 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Logout
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
