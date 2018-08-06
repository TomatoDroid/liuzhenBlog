var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
    output:{
        publicPath:'/dist/',
        filename:'[name].[hash].js'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename:'../index_prod.html',
            template:'./index.ejs',
            inject:false
        }),
        new VueLoaderPlugin()
    ],
    // 压缩
    optimization:{
        minimize:false
    }
})