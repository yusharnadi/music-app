/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    100: '#7A8580',
                    400: '#959D99',
                    500: '#272727',
                    900: '#171717',
                },
                primary: '#EE4950',
                accent: '#F3777D',
            },
        },
    },
    plugins: [],
};
