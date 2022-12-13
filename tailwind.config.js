/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto, sans-serif',
        heading: '"Roboto Slab", sans-serif'
      }
    },
  },
  plugins: [],
}
