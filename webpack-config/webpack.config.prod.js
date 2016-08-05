var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

var APP_DIR = path.resolve(__dirname, '../src');
var BUILD_DIR = path.resolve(__dirname, '../dest/scripts');
var CDN_DIR = path.resolve(__dirname, '../CDN/scripts');

var baseConfig = {
  debug: true,
  target: 'web',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.html$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("bundle.min.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};

var cdnFiles = Object.assign({}, baseConfig, {
  entry: {
    'persent-column': APP_DIR + '/jslink/persent-column/index.js',
  },
  output: {
    publicPath: '/',
    path: CDN_DIR,
    filename: '[name].bundle.js'
  }
});


var loaderFiles = Object.assign({}, baseConfig, {
  entry: {
    'persent-column-loader': APP_DIR + '/jslink/persent-column/loader.js'
  },
  output: {
    publicPath: '/',
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  }
});



module.exports = [cdnFiles, loaderFiles];