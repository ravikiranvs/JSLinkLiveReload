var config = null;

switch (process.env.NODE_ENV) {
  case 'production':
    config = require('./config.prod.js');
    break;

  default:
    config = require('./config.dev.js');
    break;
}

module.exports = config;