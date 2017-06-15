
var path = require('path');

module.exports = {
  entry: {
    app: './src/entire/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'entire')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function (loader) {
                return [ require('autoprefixer')() ]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
