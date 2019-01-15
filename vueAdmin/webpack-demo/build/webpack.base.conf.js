const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
			'@': path.resolve(__dirname,'../src'),
			'_c': path.resolve(__dirname,'../src/components'),
    }
  },
  module: {
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test:/\.js$/,
          use:'babel-loader?cacheDirectory',
          exclude:/node_modules/
        },
				{
					test:/\.less$/,
					use: [
						{ loader:'style-loader'},
						{
							loader:'css-loader',
							options:{ importLoaders: 1  }
						},
						{
							loader:'less-loader',
							options:{
								javascriptEnabled: true,
							}
						}]
				},
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader']
				},
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
    ]
  },
  plugins: [new VueLoaderPlugin()],
};
