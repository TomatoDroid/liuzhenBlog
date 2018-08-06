// 一个js文件而已
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var config = {
    // 入口
    entry:{
        main:'./main.js'
    },
    // 出口
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        // css:ExtractTextPlugin.extract({
                        //     use:'css-loader',
                        //     fallback:'vue-style-loader'
                        // })
                        use:[
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'vue-style-loader'
                        ]
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        // 重命名提取后的css文件
        new MiniCssExtractPlugin ({
            filename:'main.css'
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = config;