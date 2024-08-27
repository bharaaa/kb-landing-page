/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotty: ["Dotty", "sans-serif"],
      },
      fontWeight: {
        normal: 400
      }
    },
  },
  plugins: [],
};
