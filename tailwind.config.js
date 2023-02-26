/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: { light: "#f5f5f5", DEFAULT: "#6b7280" },
      dark: "#94a3b8",
      primary: "#f97316",
      error: { DEFAULT: "#dc2626" },
      disabled: { DEFAULT: "#d1d5db" },
      inherit: "inherit",
    },
    extend: {},
  },
  plugins: [],
};
