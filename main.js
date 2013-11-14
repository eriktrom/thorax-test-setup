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

require.config({
  deps: ['main'],
  paths: {
    'jquery': pathPrefix + 'bower_components/jquery/jquery',
    'underscore': pathPrefix + 'bower_components/underscore/underscore',
    'handlebars': pathPrefix + 'bower_components/handlebars/handlebars.runtime', // test/main.js will override with .runtime version
    'backbone': pathPrefix + 'bower_components/backbone/backbone',
    'thorax': pathPrefix + 'bower_components/thorax/thorax',
    'templates': pathPrefix + 'tmp/templates',
    'coffee-script': pathPrefix + 'bower_components/coffee-script/index',
    'cs': pathPrefix + 'bower_components/require-cs/cs'
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
    }
  }
});