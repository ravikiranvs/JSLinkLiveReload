var webpackConfig = null;

switch (process.env.NODE_ENV) {
  case 'production':
    webpackConfig = require('./webpack.config.prod.js');
    break;

  default:
    webpackConfig = require('./webpack.config.dev.js');
    break;
}

module.exports = webpackConfig;