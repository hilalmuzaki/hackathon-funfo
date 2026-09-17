import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: "#0A2540",
                coPrimary: "#7E9FBF",
                secondary: "#BFAF7E",
                black1: "#030A11",
                white1: "#EBF5FF",
                green1: "#3DF587",
                green2: "#029E40",
                red1: "#FC4444",
                red2: "#AB0000",
            },
        },
    },

    plugins: [forms],
};
