const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "payne-gray": "#49556A",
        "slate-gray": "#6B7F97",
        "alice-blue": "#EDF2F8",
        "caribbean": "#456C70"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}

