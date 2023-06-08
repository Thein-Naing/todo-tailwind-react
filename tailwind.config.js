/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        todo : 'rgba(300, 300, 157, 0.98)',
        bodyBg :'skyblue',
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
