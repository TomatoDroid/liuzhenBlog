var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack4使用vue-loader报错，需要加入下面加载器
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var config  = {
    mode:'development',
    // 入口
    entry:{
        main:'./main'
    },
    // 出口  打包后的文件将会存储为./dist/main.js
    output:{
        path: path.join(__dirname,'./dist'),
        publicPath: '/dist/',
        filename: 'main.js',
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:'vue-style-loader'
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
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                        'css-loader'
                ]

            },
            // 文件加载器
            {
                test:/\.(git|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        //重命名提取后的css文件
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new VueLoaderPlugin()
    ]
}

//相当于exports default config  因为没有安装编译ES6的插件
module.exports = config;