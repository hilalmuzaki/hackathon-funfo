import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import PrimaryLine from "@/Components/PrimaryLine";

export default function TopNav() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="side-nav-parent-1">
            <Link href={route("home")} className="platform-name-size-1 font-black">
                FunFo
            </Link>

            <PrimaryLine />

            <div className="div-context-child-1">
                <NavLink href={route("home")} active={route().current("home")}>
                    Home
                </NavLink>

                <NavLink href={route("news")} active={route().current("news")}>
                    News
                </NavLink>

                <NavLink
                    href={route("account")}
                    active={route().current("account")}
                >
                    Account
                </NavLink>
            </div>
        </nav>
    );
}
