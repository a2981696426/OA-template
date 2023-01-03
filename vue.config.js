const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/metronic8/vue/demo1/" : "/",
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
  lintOnSave: false,

  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
    // 修复hotUpdate
    config.resolve.symlinks(true)
  },
};
