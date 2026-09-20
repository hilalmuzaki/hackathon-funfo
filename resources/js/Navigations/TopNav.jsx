import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TopNav() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="top-nav-parent-1">
            <Link href={route("home")} className="platform-name-size-1">
                <img
                    src="/images/funfo-logo-second.png"
                    alt=""
                    className="h-7"
                />
            </Link>
        </nav>
    );
}
