var app_root = 'src'; 
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root, 
/**
 * the app root folder, needed by the other webpack configs
 */
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
/** 
 * https://github.com/jtangelder/sass-loader
 */
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false,
    }),
  ],
};
