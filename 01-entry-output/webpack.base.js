
var path = require('path');

module.exports = {
  // you can simple set 
  // entry: './src/index.js'
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
