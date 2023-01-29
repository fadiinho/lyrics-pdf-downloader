/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
        animation: {
            "border-pulse": "border-pulse 1s linear infinite"
        },
        keyframes: {
            "border-pulse": {
                '0%, 100%': { 'border-color': '' },
                '50%': { 'border-color': 'green' },
            }

        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}
