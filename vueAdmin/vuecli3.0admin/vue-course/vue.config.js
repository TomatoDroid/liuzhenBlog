const path = require('path')
// 匹配路径方法
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'prodection' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL ,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  //打包时不生成map文件，减少打包体积，加快打包速度
  productionSourceMap: false,
  devServer:{
    // proxy:'http://localhost:3000'
  }
}
