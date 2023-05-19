/*@type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        prime_Green: "#28e98c",
        prime_yellow: "#e4af12",
        prime_orange: "#fe6f1d",
        prime_blue: "#14c5fd",
        prime_gray: "#c0c0c0",
        prime_pink: "#c0c0c0",
        bg_gray: "#343a40",
      },
    },
  },
  plugins: [],
};
