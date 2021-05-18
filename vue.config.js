module.exports = {
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      importWorkboxFrom: "local",
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
