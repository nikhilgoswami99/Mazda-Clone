/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        vh:["485px"],
      },
      colors: {
        customGray: '#2b2b2b',
      },



    },
  },
  plugins: [],
}