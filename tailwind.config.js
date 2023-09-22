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
          4: "#9c9c9c",
          5: "#d8d8d8",
        },
        clr: {
          1: "#0a578c",
          2: "#00a1ff",
          3: "#fad130",
          4: "#00a200",
          5: "#008700",
          6: "#0082ce",
          7: "#0b436a",
          8: "#ff4b00",
        },
      },
      fontFamily: {
        sans: ["Roboto"],
      },
      backgroundImage: {
        landingHero: "url(../imgs/landing/bg.jpg)",
        landingVideo: "url(../imgs/landing/watch-video.png)",
        carMap: "url(../vectors/car/map.svg)",
      },
      content: {
        dropdownIcon: "url(../vectors/common/arrow-dropdown.svg)",
      },
    },
  },
  plugins: [],
};
