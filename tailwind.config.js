/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: { 
      fontFamily: {
        'monoton': ['Monoton', 'cursive'],
        'dancing': ['Dancing Script', 'cursive'],
      },
    extend: {
      colors:{
        "violin-dark":"#2A1C3D",
        'background-purple' : '#44318D'
      }
    },
  },
  plugins: [],
}
