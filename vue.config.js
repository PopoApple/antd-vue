const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    console.log('ooooooooo', process.env.NODE_ENV)
    //if (debug) { // 开发环境配置
      //config.devtool = 'cheap-module-eval-source-map'
    //}
  },
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('SRC', resolve('src'))
      .set('VIEW',resolve('src/views'))
  },
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
