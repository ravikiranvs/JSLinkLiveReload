var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var APP_DIR = path.resolve(__dirname, '../src');
var BUILD_DIR = path.resolve(__dirname, '../dest/scripts');
var CDN_DIR = path.resolve(__dirname, '../CDN/scripts');

var baseConfig = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.html$/, loader: 'handlebars-loader' }
    ]
  }
};

var cdnFiles = Object.assign({}, baseConfig, {
  entry: {
    'persent-column': APP_DIR + '/jslink/persent-column/index.js',
  },
  output: {
    publicPath: '/',
    path: CDN_DIR,
    filename: '[name].bundle.js'
  },
  plugins: [
    new LiveReloadPlugin({})
  ]
});


var loaderFiles = Object.assign({}, baseConfig, {
  entry: {
    'persent-column-loader': APP_DIR + '/jslink/persent-column/loader.js'
  },
  output: {
    publicPath: '/',
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
});


module.exports = [cdnFiles, loaderFiles];