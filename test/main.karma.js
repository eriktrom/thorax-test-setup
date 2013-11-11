// grab all the test files karma is serving in karma.conf.js
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  // karma serves files from /base (relative to karma.conf.js, aka, ../base)
  // modules in this app expect paths relative to js/, we don't want ruin that
  // you'd think we'd therefore want ../base/js, but karma won't fingerprint files it doesn't
  // serve, causing ugly output and slowness(no caching), thus remove the relativeness
  // of require by using / but gain the cached files.
  baseUrl: '/base/js',
  // load test files we grabbed above
  // start the test run, once require is done with async loading
  deps: ['/base/test/test-setup.js'].concat(tests),
  callback: window.__karma__.start,
  // TODO: DRY require.js paths/shims
  paths: {
    'thorax': '/base/bower_components/thorax/thorax',
    'handlebars': '/base/bower_components/handlebars/handlebars', // use regular so .compile works
    'jquery': '/base/bower_components/jquery/jquery',
    'underscore': '/base/bower_components/underscore/underscore',
    'backbone': '/base/bower_components/backbone/backbone',
    'sinon': '/base/bower_components/sinon/lib/sinon',
    'sinon-chai': '/base/bower_components/sinon-chai/lib/sinon-chai',
    'chai': '/base/bower_components/chai/chai',
    'templates': '/base/tmp/templates'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'backbone': {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    'underscore': {
      exports: '_'
    },
    'thorax': {
      exports: 'Thorax',
      deps: ['handlebars', 'backbone']
    },
  },
  // urlArgs: (new Date()).getTime()
});