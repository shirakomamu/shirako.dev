import { defineConfig } from "windicss/helpers";
import scrollbar from "@windicss/plugin-scrollbar";

export default defineConfig({
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        "blue-srk": "#0089ff",
        "orange-srk": "#ff7600",
      },
      borderColor: {
        "blue-srk": "#0089ff",
        "orange-srk": "#ff7600",
      },
      backgroundColor: {
        "blue-srk": "#0089ff",
        "orange-srk": "#ff7600",
      },
    },
  },
  // variants: {
  // extend: {
  //   opacity: ["disabled"],
  //   cursor: ["disabled"],
  // },
  // },
  plugins: [scrollbar],
});
