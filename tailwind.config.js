/** @type {import('tailwindcss/tailwind-config')} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Iosevka', 'sans-serif'],
                mono: ['Iosevka', 'monospace'],
            },
            colors: {
                coral: {
                    50: "var(--coral-50)",
                    100: "var(--coral-100)",
                    200: "var(--coral-200)",
                    300: "var(--coral-300)",
                    400: "var(--coral-400)",
                    500: "var(--coral-500)",
                    600: "var(--coral-600)",
                    700: "var(--coral-700)",
                    800: "var(--coral-800)",
                    900: "var(--coral-900)",
                },
                shell: {
                    50: "var(--shell-50)",
                    100: "var(--shell-100)",
                    200: "var(--shell-200)",
                    300: "var(--shell-300)",
                    400: "var(--shell-400)",
                    500: "var(--shell-500)",
                    600: "var(--shell-600)",
                    700: "var(--shell-700)",
                    800: "var(--shell-800)",
                    900: "var(--shell-900)",
                },
                lipstick: {
                    50: "var(--lipstick-50)",
                    100: "var(--lipstick-100)",
                    200: "var(--lipstick-200)",
                    300: "var(--lipstick-300)",
                    400: "var(--lipstick-400)",
                    500: "var(--lipstick-500)",
                    600: "var(--lipstick-600)",
                    700: "var(--lipstick-700)",
                    800: "var(--lipstick-800)",
                    900: "var(--lipstick-900)",
                },
                black: "#111d26",
                white: "#f8f8ff",
            },
        },
    },
    plugins: [
        // require("@tailwindcss/typography"),
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/aspect-ratio"),
    ],
}
