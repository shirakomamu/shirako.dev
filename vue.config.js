// eslint-disable-next-line @typescript-eslint/no-var-requires
const { gitDescribeSync } = require("git-describe");
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // importWorkboxFrom: "local",
      cacheId: "shirako.dev",
      // skipWaiting: true,
      // clientsClaim: true,
    },
    appleMobileWebAppCapable: true,
    name: process.env.VUE_APP_NAME,
    themeColor: "#0089ff",
    manifestOptions: {
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
          src: "icons/192-bl_rc-fc.png",
          sizes: "192x192",
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
    iconPaths: {
      faviconSVG: null,
      favicon32: "icons/32-bl_rc-fc.png",
      favicon16: null,
      appleTouchIcon: "icons/192-bl_rc-fc.png",
      maskIcon: null,
      msTileImage: "icons/192-bl_rc-fc.png",
    },
  },
  pluginOptions: {
    windicss: {
      scan: {
        dirs: ["src", "public"],
        exclude: ["node_modules", ".git"],
        include: [],
      },
    },
  },
};
