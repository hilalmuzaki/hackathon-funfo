import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

export default function BottomNav() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="bottom-nav-parent-1">
            <div className="bottom-nav-child-1">
                <NavLink href={route("home")} active={route().current("home")}>
                    <HomeIcon className="size-6" />
                </NavLink>

                <NavLink href={route("news")} active={route().current("news")}>
                    <NewspaperIcon className="size-6" />
                </NavLink>

                <NavLink
                    href={route("account")}
                    active={route().current("account")}
                >
                    <UserIcon className="size-6" />
                </NavLink>
            </div>
        </nav>
    );
}
