({
  baseUrl: 'tmp',
  // mainConfigFile: 'main.js',
  name: '../bower_components/almond/almond',
  include: ['main'],
  out: 'dist/main.js',
  optimize: 'uglify2',
  paths: {
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'handlebars': '../bower_components/handlebars/handlebars.runtime',
    'backbone': '../bower_components/backbone/backbone',
    'thorax': '../bower_components/thorax/thorax',
    'templates': './templates',
    'coffee-script': '../bower_components/coffee-script/index',
    'cs': '../bower_components/require-cs/cs'
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
})