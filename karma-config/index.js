var karmaConfig = null;

switch (process.env.NODE_ENV) {
  case 'coverage':
    karmaConfig = require('./karma.conf.coverage.js');
    break;

  default:
    karmaConfig = require('./karma.conf.default.js');
    break;
}

module.exports = karmaConfig;