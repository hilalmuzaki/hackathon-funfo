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
        <nav className="auth-top-nav-parent-1">
            <div className="auth-top-nav-child-1">
                <NavLink
                    href={route("login")}
                    active={route().current("login")}
                >
                    Masuk
                </NavLink>

                <NavLink
                    href={route("register")}
                    active={route().current("register")}
                >
                    Daftar
                </NavLink>
            </div>
        </nav>
    );
}
