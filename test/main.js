define(function(require) {
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');
  global.mocha.reporter('html');

  require('./test-setup.js');

  // TODO: make files dynamic, like karma server does(window.__karma__.files)
  // there's likely a way to find what files connect knows about too
  // or (i tried) just using the karma server, involved it is though
  require([
    './base.spec',
    './app.spec',
    'cs!./app-cs.spec'
  ], function() { // run mocha
    if (global.mochaPhantomJS) { global.mochaPhantomJS.run(); }
    else { global.mocha.run(); }
  });
});