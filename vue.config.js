module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                transformAssetUrls: {
                  video: ["src", "poster"],
                  source: "src",
                  img: "src",
                  image: "xlink:href",
                  "vl-style-icon": "src"
                }
              }
            }
          ]
        }
      ]
    }
  }
};
