/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        todo : 'rgba(192, 211, 223, 0.8)',
        bodyBg :'white-smoke',
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
