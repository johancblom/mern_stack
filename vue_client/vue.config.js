// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/users/*': {
        target: 'https://api.github.com',
        secure: false
      }
    }
  }
};
