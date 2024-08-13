/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midwhite: "#FAFAFB",
        skyblue: "#4B4AEF",
        grey: "#676666",
        customGray: {
          70: "rgba(242, 242, 242, 0.7)",
        },
        buttonYellow: "#FFCA1D",
        buttonYellowHover: "#E5B219",
        blueBorder: "#3534A7",
        greyBorder: "#AFAFB2",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to top right, #4f46e5, #8b5cf6)",
      },
    },
  },
  plugins: [],
};
