
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyJSPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
  entry: {
    app: './src/optimize/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'optimize')
  },
  plugins: [
    new UglifyJSPlugin({
      compress: {
        warnings: false
      }
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/optimize/index.html'
    })
  ]
}
