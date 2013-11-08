module.exports = {
  // we could setup karma completely inside grunt
  // but let's check the speed first, changing later is easy
  options: {
    configFile: 'karma.conf.js'
  },
  server: {
    background: true
  },
  ci: {
    singleRun: true,
    browsers: ['Chrome']
  }
  // TODO: we could have one for integration testing as well
};