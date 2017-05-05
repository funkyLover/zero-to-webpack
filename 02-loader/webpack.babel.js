
var path = require('path');

module.exports = {
  entry: {
    app: './src/babel/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'babel')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
