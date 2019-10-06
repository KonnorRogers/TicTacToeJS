const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    open: true,
    openPage: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
