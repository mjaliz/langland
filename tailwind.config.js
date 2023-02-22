/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: { light: "#e5e5e5", DEFAULT: "#6b7280" },
      dark: "#94a3b8",
      primary: "#f97316",
    },
    extend: {},
  },
  plugins: [],
};
