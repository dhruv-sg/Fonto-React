/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'character-drop': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                    '50%': {
                        transform: 'translateY(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'character-drop': 'character-drop 0.05s cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
}
