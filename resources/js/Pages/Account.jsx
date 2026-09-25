import { Head, Link } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import ProfileData from "@/Cards/ProfileData";
import UserPreference from "@/Cards/UserPreference";
import AppTheme from "@/Cards/AppTheme";
import Logout from "@/Cards/Logout";

export default function Account() {
    return (
        <WebLayout>
            <Head title="Account" />

            <section className="top-section-parent-1">
                <section className="section-child-1 lg:px-48">
                    <ProfileData />
                    <UserPreference />
                    <AppTheme />
                    <Logout />
                </section>
            </section>
        </WebLayout>
    );
}
