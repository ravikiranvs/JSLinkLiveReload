var path = require('path');

var APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  devtool: 'inline-source-map',
  noInfo: true,
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.html$/, loader: 'handlebars-loader' }
    ]
  }
};