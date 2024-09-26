/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        vh:["485px"],
      },
      colors: {
        customGray: '#f5f5f5',
      },


    },
  },
  plugins: [],
}