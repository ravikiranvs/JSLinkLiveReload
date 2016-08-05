var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: true,
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['es2015']
    }
  },
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.html$/, loader: 'handlebars-loader' }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve('src/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel'
      },
      {
        test: /\.js$/,
        include: path.resolve('src/'),
        loader: 'isparta'
      }
    ]
  },
};