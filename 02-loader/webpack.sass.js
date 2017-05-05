
var path = require('path');

module.exports = {
  entry: {
    app: './src/sass/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'sass')
  },
  module: {
    rules: [
      { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
}
