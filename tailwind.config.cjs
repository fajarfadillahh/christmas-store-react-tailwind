/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        red: {
          500: "#d42b39",
          600: "#dc3845",
        },
      },
      lineHeight: {
        title: "140%",
        text: "180%",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
