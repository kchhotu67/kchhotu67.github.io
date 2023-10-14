/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

