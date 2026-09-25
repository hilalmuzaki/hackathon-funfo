import { Link } from "@inertiajs/react";

export default function ButtonCard1({ className = "", children, ...props }) {
    return (
        <Link
            {...props}
            className={`card-parent-1 hover:opacity-80 ` + className}
        >
            {children}
        </Link>
    );
}
