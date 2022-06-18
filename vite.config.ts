import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { customAlphabet } from "nanoid";
import windiCss from "vite-plugin-windicss";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

const HASH_LENGTH = 8;
const nanoid = customAlphabet("0123456789abcdef", HASH_LENGTH);
const hash = nanoid();

const vitePWAPlugin = VitePWA({
  devOptions: { enabled: false },
  registerType: "autoUpdate",
  includeAssets: ["favicon.png", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    name: "shirako.dev",
    short_name: "shirako.dev",
    description: "Portfolio site for 白狐マム.",
    theme_color: "#008aff",
    icons: [
      {
        src: "icons/32-bl_rc-fc.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/128-bl_rc-fc.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/512-bl_rc-fc.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
});

export default defineConfig({
  plugins: [windiCss(), vitePWAPlugin, vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].${hash}.js`,
        chunkFileNames: `[name].${hash}.js`,
        assetFileNames: `[name].${hash}.[ext]`,
      },
    },
  },
});
