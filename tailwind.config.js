/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    fontFamily: {
      "gilroy-bold": ["gilroy-bold", "sans-serif"],
      "gilroy-extrabold": ["gilroy-extrabold", "sans-serif"],
      "gilroy-thin": ["gilroy-thin", "sans-serif"],
      "gilroy-regular": ["gilroy-regular", "sans-serif"],
      "gilroy-medium": ["gilroy-medium", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#161C2D",
        blue: "#473BF0",
        green: "#68D585",
        red: "#F74D4D",
        "light-blue": "#473BF0",
        "v-light-blue": "#F4F7FA",
      },
    },
  },
  plugins: [],
};
