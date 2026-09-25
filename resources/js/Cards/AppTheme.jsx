import { useState, useEffect } from "react";
import Checkbox from "@/Components/Checkbox";

const THEME_OPTIONS = [
    { value: "system", label: "Sesuai perangkat" },
    { value: "light", label: "Mode terang" },
    { value: "dark", label: "Mode gelap" },
];

export default function AppTheme() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "system",
    );

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            const isDark =
                theme === "dark" || (theme === "system" && mediaQuery.matches);

            root.classList.toggle("dark", isDark);
        };

        applyTheme();
        localStorage.setItem("theme", theme);

        if (theme === "system") {
            mediaQuery.addEventListener("change", applyTheme);
            return () => mediaQuery.removeEventListener("change", applyTheme);
        }
    }, [theme]);

    return (
        <div className="card-parent-1">
            <div className="div-context-parent-1">
                <h2 className="title-size-1 font-bold">Tema Aplikasi</h2>

                <div className="div-context-child-1">
                    {THEME_OPTIONS.map((option) => (
                        <div
                            key={option.value}
                            className="flex items-center gap-2"
                        >
                            <Checkbox
                                id={`theme-${option.value}`}
                                checked={theme === option.value}
                                onChange={() => setTheme(option.value)}
                            />
                            <label
                                htmlFor={`theme-${option.value}`}
                                className="cursor-pointer"
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
