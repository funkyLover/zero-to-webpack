
var path = require('path');

module.exports = {
  entry: {
    page1: './src/multiple-entry/page1.js',
    page2: './src/multiple-entry/page2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'multiple-entry'),
    filename: '[name].js'
  }
}
