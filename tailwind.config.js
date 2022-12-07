/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1840px",
      },
      fontSize: {
        large: "2.5rem",
      },
      borderRadius: {
        round: "22rem",
      }
    },
  },
  plugins: [],
};
