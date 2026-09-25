import { useState, useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import { Link } from "@inertiajs/react";

export default function LinkToPage1({ href, children, className = '', icon = null }) {
    return (
        <Link href={href} className="w-full h-fit hover:opacity-80">
            <div className="card-parent-1">
                <p className="body-size-1 text-center">{children}</p>
            </div>
        </Link>
    );
}
