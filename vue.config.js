module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/water-fountain-list/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global.scss";`
      }
    }
  }
};
