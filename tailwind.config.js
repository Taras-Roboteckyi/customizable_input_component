/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bg_color: "rgb(148 163 184)",
      offColor: "#888",
      onColor: "#00bfff",
      white: "#ffffff",
      black: "#000000",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      green: " rgb(34 197 94)",
      red: "rgb(239 68 68)",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Додаємо шрифт Roboto
        serif: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
