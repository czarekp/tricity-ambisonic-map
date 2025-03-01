const merge = require("webpack-merge");

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options =>
        merge(options, {
          transformAssetUrls: {
            video: ["src", "poster"],
            source: "src",
            img: "src",
            image: "xlink:href",
            "vl-style-icon": "src"
          }
        })
      );
  }
};
