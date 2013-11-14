function isKarma() {
  return typeof window.__karma__ !== "undefined";
}

var baseUrl, pathPrefix;
if (isKarma()) {
  baseUrl = '/base/js'; // path to js/main.js from root of karma server, hosted from /base
  pathPrefix = '/base/'; // prepend /base to all paths used below for karma server root
} else {
  baseUrl = '../js'; // path to js/main.js, from this file
  pathPrefix = '../'; // prepend ../ to all paths used below, for non karma use
}

function configDeps() {
  // no auto dep loading for non karma server(yet)
  if (!isKarma()) { return ['../test/main.browser']; }

  // grab all the test files karma is serving in karma.conf.js
  var tests = [];
  for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
      if (/\.spec\.js$/.test(file)) {
        tests.push(file);
      }
    }
  }

  // deps are set to all files served by karma that contain .spec + test_setup.js
  return [pathPrefix + 'test/test-setup.js'].concat(tests);
}

function configCallback() {
  // if using karma, start the runner from requirejs.config callback option
  if (isKarma()) { return window.__karma__.start; }
}

function configUrlArgs() {
  if (isKarma()) { return ''; } // karma handles all caching concerns
  return "bust=" +  (new Date()).getTime();
}

require.config({
  baseUrl: baseUrl,
  deps: configDeps(),
  callback: configCallback(),
  paths: {
    // tests only
    'handlebars': pathPrefix + 'bower_components/handlebars/handlebars', // use regular so .compile works
    'mocha': pathPrefix + 'bower_components/mocha/mocha', // only used for browser/mocha_phantomjs
    'sinon': pathPrefix + 'bower_components/sinon/lib/sinon',
    'sinon-chai': pathPrefix + 'bower_components/sinon-chai/lib/sinon-chai',
    'chai': pathPrefix + 'bower_components/chai/chai',
    'fixtures': pathPrefix + 'bower_components/fixtures/fixtures'
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
  urlArgs: configUrlArgs()
});