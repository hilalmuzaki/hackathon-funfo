import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import JustCoPrimaryLine from "@/Components/JustCoPrimaryLine";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="side-nav-parent-1">
            <Link
                href={route("home")}
                className="platform-name-size-1 font-black"
            >
                <img
                    src="/images/funfo-logo-second.png"
                    alt="funfo-logo"
                    title="funfo-logo"
                    className="w-36"
                />
            </Link>

            <JustCoPrimaryLine />

            <div className="div-context-child-1">
                <NavLink href={route("home")} active={route().current("home")}>
                    <HomeIcon className="button-icon-nav" />
                    <p>Beranda</p>
                </NavLink>

                <NavLink href={route("news")} active={route().current("news")}>
                    <NewspaperIcon className="button-icon-nav" />
                    <p>Berita</p>
                </NavLink>

                <NavLink
                    href={route("account")}
                    active={route().current("account")}
                >
                    <UserIcon className="button-icon-nav" />
                    <p>Akun</p>
                </NavLink>
            </div>
        </nav>
    );
}
