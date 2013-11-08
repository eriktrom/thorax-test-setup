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
  // so in test/main.js(this file), our baseUrl should be ../base/js
  baseUrl: '../base/js',
  // load test files we grabbed above
  deps: tests,
  // start the test run, once require is done with async loading
  callback: window.__karma__.start,
  paths: {
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'handlebars': '../bower_components/handlebars/handlebars.runtime',
    'backbone': '../bower_components/backbone/backbone',
    'thorax': '../bower_components/thorax/thorax'
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
    'bootstrap': { // TODO: bootstrap if/then
      deps: ['jquery']
    }
  }
});