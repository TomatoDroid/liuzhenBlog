var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
    output:{
        publicPath:'/dist/',
        // 将入口文件重命名为带有20位hase值的唯一文件
        filename:'[name].[hash].js'
    },
    plugins:[
        new ExtractTextPlugin({
            // 提取css，并重名为带有20位hash值的唯一文件
            filename:'[name].[hash].css',
            allChunks:true
        }),
        //定义当前node环境为生产环境
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        // 提取模板，并保存入口html文件
        new HtmlWebpackPlugin({
            filename:'../index_prod.html',
            template:'./index.ejs',
            inject:false
        }),
        new VueLoaderPlugin()
    ],
    // 压缩js
    optimization: {
        minimize: false
    },
});