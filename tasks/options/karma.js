module.exports = {
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
};