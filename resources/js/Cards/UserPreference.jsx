import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { Button } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function UserPreference({ subscription = {} }) {
    const [editing, setEditing] = useState(false);

    const initialChatId = subscription?.telegram_chat_id ?? "";
    const initialActive = Boolean(subscription?.is_active);

    const { data, setData, post, processing, errors, reset } = useForm({
        telegram_chat_id: initialChatId,
        is_active: initialActive,
    });

    // Perbarui data form jika prop subscription berubah setelah simpan
    useEffect(() => {
        setData({
            telegram_chat_id: subscription?.telegram_chat_id ?? "",
            is_active: Boolean(subscription?.is_active),
        });
    }, [subscription]);

    const openModal = () => {
        setData({
            telegram_chat_id: initialChatId,
            is_active: initialActive,
        });
        setEditing(true);
    };

    const closeModal = () => {
        reset();
        setEditing(false);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("alert-subscription.update"), {
            preserveScroll: true,
            onSuccess: () => setEditing(false),
        });
    };

    return (
        <section className="card-parent-1">
            <div className="div-context-parent-1">
                <h2 className="title-size-1 font-bold">Alerts Telegram</h2>

                <div className="div-context-child-1">
                    <p className="info-1">Status langganan</p>
                    <p className={`body-size-1 font-semibold ${initialActive ? "text-emerald-400" : "text-gray-400"}`}>
                        {initialActive ? "Aktif" : "Tidak aktif"}
                    </p>
                </div>

                <div className="div-context-child-1">
                    <p className="info-1">Telegram Chat ID</p>
                    <p className="body-size-1">
                        {initialChatId || "Belum diatur"}
                    </p>
                </div>
            </div>

            <Button
                onClick={openModal}
                className="flex flex-row gap-1 items-center text-left w-fit hover:opacity-80 text-cyan-400 font-medium"
            >
                <PencilSquareIcon className="size-5" /> Edit alert
            </Button>

            <Modal show={editing} onClose={closeModal} focusable>
                <form onSubmit={submit} className="p-6 section-child-1">
                    <h2 className="title-size-1 font-bold">
                        Pengaturan Alerts Telegram
                    </h2>

                    <p className="info-1 mt-1 text-sm text-gray-400">
                        Dapatkan notifikasi Pre-Market &amp; Anti-FOMO langsung
                        ke Telegram kamu. Kirim pesan ke{" "}
                        <span className="font-semibold text-cyan-400">@userinfobot</span>{" "}
                        untuk mengetahui Chat ID kamu.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="telegram_chat_id"
                            value="Telegram Chat ID"
                        />
                        <TextInput
                            id="telegram_chat_id"
                            type="text"
                            name="telegram_chat_id"
                            value={data.telegram_chat_id}
                            className="mt-1 block w-full"
                            placeholder="contoh: 1394104383"
                            onChange={(e) =>
                                setData("telegram_chat_id", e.target.value)
                            }
                        />
                        <InputError
                            className="mt-2"
                            message={errors.telegram_chat_id}
                        />
                    </div>

                    <label className="mt-4 flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="is_active"
                            checked={data.is_active}
                            className="rounded border-gray-600 bg-gray-900 text-cyan-500 shadow-sm focus:ring-cyan-500"
                            onChange={(e) =>
                                setData("is_active", e.target.checked)
                            }
                        />
                        <span className="text-sm text-gray-200">
                            Aktifkan langganan alert
                        </span>
                    </label>
                    <InputError
                        className="mt-2"
                        message={errors.is_active}
                    />

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal} type="button">
                            Batal
                        </SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={processing}>
                            {processing ? "Menyimpan..." : "Simpan"}
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}