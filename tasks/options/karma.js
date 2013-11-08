module.exports = {
  // we could setup karma completely inside grunt
  // but let's check the speed first, changing later is easy
  server: {
    configFile: 'karma.conf.js',
    background: true
  }
  // TODO: we could have one for integration testing as well
};