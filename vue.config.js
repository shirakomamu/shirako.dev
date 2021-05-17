/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    node: {
      global: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        global: "window",
      }),
    ],
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
    name: "Shirako Mamu",
    themeColor: "#008aff",
    manifestOptions: {
      name: "Shirako Mamu",
      shortName: "Shirako Mamu", // displayed on desktop/mobile
    },
    iconPaths: {
      favicon32: "images/icons/icon-32b.png",
      favicon16: null,
      appleTouchIcon: "images/icons/icon-128b.png",
      maskIcon: null,
      msTileImage: "images/icons/icon-128b.png",
    },
  },
};
