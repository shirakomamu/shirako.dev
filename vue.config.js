/* eslint-disable @typescript-eslint/no-var-requires */
const { gitDescribeSync } = require("git-describe");
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;

module.exports = {
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      importWorkboxFrom: "local",
      skipWaiting: true,
      clientsClaim: true,
    },
    name: process.env.VUE_APP_NAME,
    themeColor: "#008aff",
    manifestOptions: {
      icons: [
        {
          src: "./images/icons/icon-32b.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./images/icons/icon-128b.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./images/icons/icon-512b.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    iconPaths: {
      faviconSVG: null,
      favicon32: "images/icons/icon-32b.png",
      favicon16: null,
      appleTouchIcon: "images/icons/icon-128b.png",
      maskIcon: null,
      msTileImage: "images/icons/icon-128b.png",
    },
  },
};
