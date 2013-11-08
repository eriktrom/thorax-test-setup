// grab all the test files karma is serving in karma.conf.js
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

var firstDep = ['/base/test/test-setup.js'];
var deps = firstDep.concat(tests);

require.config({
  // karma serves files from /base (relative to karma.conf.js, aka, ../base)
  // modules in this app expect paths relative to js/, we don't want ruin that
  // so in test/main.js(this file), our baseUrl should be ../base/js
  baseUrl: '../base/js',
  // load test files we grabbed above
  // start the test run, once require is done with async loading
  deps: deps,
  callback: window.__karma__.start,
  paths: {
    'thorax': '/base/bower_components/thorax/thorax',
    'handlebars': '/base/bower_components/handlebars/handlebars.runtime',
    'jquery': '/base/bower_components/jquery/jquery',
    'underscore': '/base/bower_components/underscore/underscore',
    'backbone': '/base/bower_components/backbone/backbone',
    'sinon': '/base/bower_components/sinon/lib/sinon',
    'sinon-chai': '/base/bower_components/sinon-chai/lib/sinon-chai',
    'chai': '/base/bower_components/chai/chai'
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