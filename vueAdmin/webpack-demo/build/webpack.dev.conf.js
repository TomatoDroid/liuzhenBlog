const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    hot:true,
  },
  plugins:[
    // 这就开启了 css 热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
