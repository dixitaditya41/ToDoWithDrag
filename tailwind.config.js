/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
    'custom-pink': '#E3A5C7',
  },
  theme: {
    extend: {
      colors: {
        'custom-pink': '#E3A5C7',
      },
    },
  },
  plugins: [],
}
