
var path = require('path');

module.exports = {
  // you can simple set 
  // entry: './src/index.js'
  entry: {
    lib: './src/library/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'library'),
    filename: '[name].js',
    library: 'lib',
    // var, this, commonjs, commonjs2, amd, umd
    libraryTarget: 'commonjs'
  }
}
