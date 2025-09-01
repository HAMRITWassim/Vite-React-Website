/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Bebas Neue", "sans-serif"],
        button: ["Montserrat", "sans-serif"],
      },

      keyframes: {
        leftSplit: {
          "0%": { transform: "translate(0,0) scale(1)", opacity: 1 },
          "20%": { transform: "translate(-10px, -5px) rotate(-1deg) scale(1)" }, // petit glissement

          "100%": {
            transform: "translate(-100vw, -50px) rotate(-4deg) scale(5) ",
            opacity: 0,
          }, // fuite hors écran
        },
        rightSplit: {
          "0%": { transform: "translate(0,0) scale(1)", opacity: 1 },
          "20%": { transform: "translate(10px, 5px) rotate(1deg) scale(1)" },

          "100%": {
            transform: "translate(100vw, 50px) rotate(4deg) scale(5)",
            opacity: 0,
          },
        },
      },
      animation: {
        leftSplit: "leftSplit 1.8s forwards ease-in-out",
        rightSplit: "rightSplit 1.8s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
