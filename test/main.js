define(function(require) {
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');
  global.mocha.reporter('html');

  require('./test-setup.js');

  // TODO: make files array dynamic, like karma server does(window.__karma__.files)
  // there's likely a way to find what files connect can serve

  require([ // require test files
    './base.spec',
    './helpers/helpers.spec',
    './helpers/view-helpers.spec',
    './integration/example.spec',
    './app.spec',
    'cs!./app-cs.spec'
  ], function() { // run mocha
    if (global.mochaPhantomJS) { global.mochaPhantomJS.run(); }
    else { global.mocha.run(); }
  });
});