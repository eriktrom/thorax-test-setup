define(function(require) {
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');
  global.mocha.reporter('html');

  require('./test-setup.js');

  require([ // require test files
    './app.spec',
    // routers
    './routers/example.spec',
    // views
    './views/root.spec',
    'cs!./views/root-coffee.spec', // coffeescript works
    // models
    './models/example.spec',
    // collections
    './collections/example.spec',
    // helpers
    './helpers/helpers.spec',
    './helpers/view-helpers.spec',
    // integratioin
    './integration/example.spec',
    // utils
    './utils/example.spec',
    // fixture sanity test
    './fixtures/templating-fixtures.spec',
    // './fixtures/js-fixtures.spec'
  ], function() { // run mocha
    if (global.mochaPhantomJS) { global.mochaPhantomJS.run(); }
    else { global.mocha.run(); }
  });

  // TODO: make files array dynamic, like karma server does(window.__karma__.files)
  // there's likely a way to find what files connect can serve


});