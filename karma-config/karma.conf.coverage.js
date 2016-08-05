var WebpackTestConfig = require('../webpack-config/webpack.config.coverage.js');

process.env.NODE_ENV = 'test';

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    // karma only needs to know about the test bundle
    files: [
      'src/**/*.spec.js'
    ],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai-plugins',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-coverage',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },
    reporters: ['coverage'],
    coverageReporter: {
      type: 'text'
    },
    singleRun: true,
    // webpack config object
    webpack: WebpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};