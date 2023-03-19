/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: { light: "#f5f5f5", DEFAULT: "#6b7280", 1: "#7b797c" },
      dark: {
        1: "#1a151b",
        2: "#232027",
        3: "#1f1c25",
        4: "#332d39",
      },
      primary: "#f97316",
      gold: "#fdeeab",
      error: { DEFAULT: "#dc2626" },
      disabled: { DEFAULT: "#d1d5db" },
      inherit: "inherit",
    },
    extend: {},
  },
  plugins: [],
};
