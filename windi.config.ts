import { defineConfig } from "windicss/helpers";
import scrollbar from "@windicss/plugin-scrollbar";

export default defineConfig({
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-srk": "#0089ff",
        "orange-srk": "#ff7600",
      },
    },
  },
  shortcuts: {
    "ps-bg-flat": "bg-white dark:bg-dark-800",
    "input-color":
      "border-cool-gray-100 bg-white dark:(border-cool-gray-700 bg-dark-800)",
  },
  // variants: {
  // extend: {
  //   opacity: ["disabled"],
  //   cursor: ["disabled"],
  // },
  // },
  plugins: [scrollbar],
});
