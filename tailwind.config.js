/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#333333',
        'brown': '#3f3939',
        'olive': '#9d9a87',
        'sand': '#c9c9c9',
        'ivory': '#f4f3eb'
      },
      fontSize:{
        'brand': '240px',
        'brand-md': '160px',
      }
    },
  },
  plugins: [],
}