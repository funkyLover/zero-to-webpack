
var path = require('path');

module.exports = {
  entry: {
    app: './src/eslint/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'eslint')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          // cool feature!
          fix: true,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  }
}
