/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        OrangeColor: "#FCD60F",
        greenColor: "#438219",
        BlackColor: "#17181D",
        whiteColor: "#F5F5F1",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        font: ["Yellowtail"," cursive"], 
      },
    },
  },
  plugins: [],
};