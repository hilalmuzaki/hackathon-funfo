import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import WebLayout from "@/Layouts/WebLayout";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <WebLayout>
            <Head title="Profile" />

            <section className="top-section-parent-1">
                <section className="section-child-1 lg:px-48">
                    <div className="">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </section>
            </section>
        </WebLayout>
    );
}
