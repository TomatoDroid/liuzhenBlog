const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry:'./src/index.js',
   plugins:[
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title:'Caching'
        }),
   ],
   output:{
       filename:'[name].[chunkhash].js',
       path:path.resolve(__dirname,'dist')
   },
   optimization:{
       runtimeChunk:'single',
       splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
       }
   },
}