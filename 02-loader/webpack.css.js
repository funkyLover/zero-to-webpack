
var path = require('path');

module.exports = {
  entry: {
    app: './src/css/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'css')
  },
  module: {
    rules: [
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
