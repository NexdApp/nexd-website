module.exports = {
  transpileDependencies: ["vuetify"],
  // publicPath: process.env.NODE_ENV === "production" ? "/nexd-website/" : "/"
  // root directory helpful for production deployment on netlify
  publicPath: "/",
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 4194304 }));
  },
};
