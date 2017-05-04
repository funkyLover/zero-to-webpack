
var path = require('path');

module.exports = {
  // you can simple set 
  // entry: './src/index.js'
  entry: {
    app: './src/single-entry/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'single-entry'),
    filename: '[name].js'
  }
}
