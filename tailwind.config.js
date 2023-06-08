/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        todo : 'white-smoke',
        bodyBg :'rgba(50, 50, 50, 0.98)',
      },
      spacing: {
        '2rem': '2rem',
        '3rem': '3rem',
      },

      fontSize: {

        2 : '2rem'

      }
    },
  },
  plugins: [],
}
