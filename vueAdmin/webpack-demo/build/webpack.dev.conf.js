const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    hot:true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'vueAdmin',
      template: 'index.html',
      inject: true,
    }),
    // 这就开启了 css 热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
