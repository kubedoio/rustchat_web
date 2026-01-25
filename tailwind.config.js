/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Essential for the manual toggle
    theme: {
        extend: {
            colors: {
                midnight: {
                    DEFAULT: '#020617', // Extremely deep navy/slate
                    lighter: '#0F172A',
                },
                accent: {
                    purple: '#8B5CF6',
                    teal: '#14B8A6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Or 'Outfit' as recommended
            },
            animation: {
                'fade-up': 'fade-up 0.8s ease-out forwards',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
