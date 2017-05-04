
var path = require('path');

module.exports = {
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
