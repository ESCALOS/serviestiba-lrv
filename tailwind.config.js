import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    100: "#d5e3da",
                    200: "#abc7b5",
                    300: "#81ac8f",
                    400: "#57906a",
                    500: "#2d7445",
                    600: "#245d37",
                    700: "#1b4629",
                    800: "#122e1c",
                    900: "#09170e",
                },
                secondary: {
                    100: "#fcf4d8",
                    200: "#fae8b1",
                    300: "#f7dd8b",
                    400: "#f5d164",
                    500: "#f2c63d",
                    600: "#c29e31",
                    700: "#917725",
                    800: "#614f18",
                    900: "#30280c",
                },
                info: {
                    100: "#ccd7d6",
                    200: "#99aead",
                    300: "#678684",
                    400: "#345d5b",
                    500: "#013532",
                    600: "#012a28",
                    700: "#01201e",
                    800: "#001514",
                    900: "#000b0a",
                },
                emphasis: {
                    100: "#fdfdfc",
                    200: "#fbfbf8",
                    300: "#faf9f5",
                    400: "#f8f7f1",
                    500: "#f6f5ee",
                    600: "#c5c4be",
                    700: "#94938f",
                    800: "#62625f",
                    900: "#313130",
                },
            },
        },
    },

    plugins: [forms],
};
