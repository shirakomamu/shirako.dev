import vue from "@vitejs/plugin-vue";
import { customAlphabet } from "nanoid";
import { URL, fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import windiCss from "vite-plugin-windicss";

const HASH_LENGTH = 8;
const nanoid = customAlphabet("0123456789abcdef", HASH_LENGTH);
const hash = nanoid();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const vitePWAPlugin = VitePWA({
    devOptions: { enabled: false },
    registerType: "autoUpdate",
    includeAssets: ["favicon.png", "robots.txt", "apple-touch-icon.png"],
    manifest: {
      name: env.VITE_APP_NAME,
      short_name: env.VITE_APP_NAME,
      description: env.VITE_APP_DESCRIPTION,
      theme_color: "#0089ff",
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

  return {
    // @ts-expect-error: <This falsely asks for windiCss().default>
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
  };
});
