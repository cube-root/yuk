module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html', ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}