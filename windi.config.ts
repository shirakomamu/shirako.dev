import scrollbar from "@windicss/plugin-scrollbar";
import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: "class",
  theme: { extend: { colors: { "blue-srk": "#0089ff" } } },
  shortcuts: {
    "ps-text-link": "text-blue-srk hover:underline focus:underline",
    "ps-bg-flat": "bg-white dark:bg-dark-800",
    "ps-bg-panel": "bg-gray-200 dark:bg-gray-700",
    "ps-bg-input":
      "border-cool-gray-100 bg-white dark:(border-cool-gray-700 bg-dark-800)",
  },
  plugins: [scrollbar],
});
