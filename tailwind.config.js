/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter var", "sans-serif"],
      lustria: ["Lustria", "sans-serif"],
      orbitron:["Orbitron", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}