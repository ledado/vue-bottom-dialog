const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/vue-bottom-dialog.js'],
  output: {
    path: path.resolve('dist'),
    library: 'VuePlugin',
    libraryTarget: 'umd',
    filename: 'vue-bottom-dialog.js',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
