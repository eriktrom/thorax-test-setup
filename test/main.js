define(function(require) {
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');

  require('./test-setup.js');

  //
  // TODO: make files dynamic, like karma server does(window.__karma__.files)
  // there's likely a way to find what files connect knows about too
  // or (i tried) just using the karma server, involved it is though
  require([
    './base.spec',
    './app.spec',
  ], function() { // run mocha
    global.mocha.run();
  });
});