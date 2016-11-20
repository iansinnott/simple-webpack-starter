/**
 * Full Webpack docs at https://webpack.js.org
 */
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: 'babel-loader',
      },
    ],
  },
};


