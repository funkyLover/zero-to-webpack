
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: {
    // react-hot-reload/patch should not be packup when production
    vendor: ['react', 'react-dom', 'material-ui', 'react-router-dom', 'react-tap-event-plugin', 'react-hot-loader/patch'],
    app: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: [resolve('src')], loader: 'eslint-loader', enforce: 'pre',
        options: { formatter: require('eslint-friendly-formatter') }
      },
      { test: /\.(js|jsx)$/, include: [resolve('src')], loader: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new DashboardPlugin()
  ]
}
