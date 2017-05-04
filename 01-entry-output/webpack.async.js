
var path = require('path');

module.exports = {
  // you can simple set 
  // entry: './src/index.js'
  entry: {
    app: './src/async-chunk/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'async-chunk'),
    chunkFilename: '[name].js', 
    filename: '[name].js',
    publicPath: path.join(__dirname, 'dist', 'async-chunk/')
  }
}
