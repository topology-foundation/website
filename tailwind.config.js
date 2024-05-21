/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      keyframes: {
        scarf: {
          "0%, 100%": {
            transform: "rotate(1deg)",
            "animation-timing-function": "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "50%": {
            transform: "rotate(0)",
            "animation-timing-function": "cubic-bezier(0.5, 0, 0.5, 1)",
          },
        },
      },
      animation: {
        scarf: "scarf 10s infinite",
      },
    },
    colors: {
      "topology-border": "#77616C",
      "topology-bg": "#FEFAF8",
      "topology-scroll-bg": "#FCF2E8",
      "topology-scroll-slider": "#E09C85",
      "topology-red": "#E09C85",
      "topology-green": "#D6D0A0",
    },
  },
  plugins: [],
};
