const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './javascript/index.js'],
  output: {
    path: path.resolve(__dirname, './javascript'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ] },
};
