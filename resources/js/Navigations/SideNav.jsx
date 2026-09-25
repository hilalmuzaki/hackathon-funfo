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
                    alt=""
                    className="w-36"
                />
            </Link>

            <JustCoPrimaryLine />

            <div className="div-context-child-1">
                <NavLink href={route("home")} active={route().current("home")}>
                    <HomeIcon className="button-icon-nav" />
                    <p>Home</p>
                </NavLink>

                <NavLink href={route("news")} active={route().current("news")}>
                    <NewspaperIcon className="button-icon-nav" />
                    <p>News</p>
                </NavLink>

                <NavLink
                    href={route("account")}
                    active={route().current("account")}
                >
                    <UserIcon className="button-icon-nav" />
                    <p>Account</p>
                </NavLink>

                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                            >
                                {user.name}

                                <svg
                                    className="-me-0.5 ms-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route("profile.edit")}>
                            Profile
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </nav>
    );
}
