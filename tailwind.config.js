/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotty: ["Dotty", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
      },
      colors: {
        "purple-insta": "#C13584",
        "green-toko": "#40B546",
        "blue-keebara": "#1C3076",
        "blue-darker": "#142254"
      },
    },
  },
  plugins: [],
};
