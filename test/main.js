define(function(require) {
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');

  require('./test-setup.js');

  // manually require test files when not using karma(TODO: fix this)
  require([
    './base.spec'
  ], function() { // run mocha
    global.mocha.run();
  });
});