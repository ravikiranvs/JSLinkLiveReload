var WebpackTestConfig = require('../webpack-config/webpack.config.test.js');

process.env.NODE_ENV = 'test';

module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'IE'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    // karma only needs to know about the test bundle
    files: [
      'src/**/*.spec.js'
    ],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-ie-launcher',
      'karma-chai-plugins',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      '**/src/**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    singleRun: true,
    // webpack config object
    webpack: WebpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};