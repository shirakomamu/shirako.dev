module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    textColor: (theme) => ({
      ...theme("colors"),
      "blue-srk": "#008aff",
    }),
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
