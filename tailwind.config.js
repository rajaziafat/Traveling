/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: {
          1: "#f1f3f4",
          2: "#333333",
          3: "#757575",
        },
        clr: {
          1: "#0a578c",
          2: "#00a1ff",
          3: "#fad130",
          4: "#00a200",
          5: "#008700",
          6: "#0082ce",
          7: "#0b436a",
        },
      },
      fontFamily: {
        sans: ["Roboto"],
      },
      backgroundImage: {
        landingHero: "url(../imgs/landing/bg.jpg)",
        landingVideo: "url(../imgs/landing/watch-video.png)",
      },
    },
  },
  plugins: [],
};
