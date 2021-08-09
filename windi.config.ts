import { defineConfig } from "windicss/helpers";
import scrollbar from "@windicss/plugin-scrollbar";

export default defineConfig({
  darkMode: "class", // false, "media", or "class"
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
    "ps-bg-panel": "bg-gray-200 dark:bg-gray-700",
    "input-color":
      "border-cool-gray-100 bg-white dark:(border-cool-gray-700 bg-dark-800)",
  },
  plugins: [scrollbar],
});
