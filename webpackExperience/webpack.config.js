var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config  = {
    // 入口
    entry:{
        main:'./main'
    },
    // 出口  打包后的文件将会存储为./dist/main.js
    output:{
        path: path.join(__dirname,'./dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        //重命名提取后的css文件
        new ExtractTextPlugin('main.css')
    ]
}

//相当于exports default config  因为没有安装编译ES6的插件
module.exports = config;