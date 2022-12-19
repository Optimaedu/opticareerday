/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto, sans-serif',
        heading: '"Roboto Slab", sans-serif',
        logo: '"Roboto Condensed", sans-serif'
      },
      backgroundColor: {
        optimaGray: "#3d3d3d"
      },
      minWidth: {
        1600: "1600px"
      },
      minHeight: {
        200: "200px"
      },
      backgroundImage: {
        footerBg: "url(../../public/footer-optima.svg)"
      }
    },
  },
  plugins: [],
}
