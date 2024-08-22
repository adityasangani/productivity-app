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
        faqGrey: "#F7F7FC",
        navigationBorder: "#C5C5C5",
        dashboardBg: "#F4F8F9",
        leftNavCompSelect: "#4339F2",
        leftNavCompDeselect: "#787486",
        calendarPassedDates: "#D6D4D4",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to top right, #4f46e5, #8b5cf6)",
        "white-gradient": "linear-gradient(to bottom, #ffffff, #e6e6e6)",
      },
    },
  },
  plugins: [],
};
