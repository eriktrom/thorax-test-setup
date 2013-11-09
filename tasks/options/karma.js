module.exports = {
  // TODO: setup karma completely within grunt
  options: {
    configFile: 'karma.conf.js'
  },
  server: {
    background: true
  },
  ci: {
    singleRun: true,
    browsers: ['PhantomJS']
  },
  preDeploy: {
    singleRun: true,
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari']
  }
  // TODO: integration testing
};