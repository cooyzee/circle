const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: env.production ? '[name].[chunkhash:8].js' : '[name].js',
      chunkFilename: env.production ? '[name].[chunkhash:8].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(s)?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: [!env.production && 'react-refresh/babel'].filter(item => item !== false)
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: env.production ? 'app.[contenthash:8].css' : 'app.css',
      }),
      !env.production && new ReactRefreshWebpackPlugin()
    ].filter(item => item !== false),
    optimization: {
      splitChunks: {
        cacheGroups: { // 创建一个 vendors chunk，其中包括整个应用程序中 node_modules 的所有代码
          commons: {test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all'}
        }
      }
    },
    devServer: {
      host: '192.168.0.7',
      port: 3000,
      historyApiFallback: true,
      open: true,
      hotOnly: true, // disable auto page reload
    }
  }
}
