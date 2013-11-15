
// TODO: remove build duplication.
// Right now if a new path is added to your project, you'll need to update the
// path here as well. This is error prone but currently paths are all extracted
// to remove duplication between testing/dev environments, which means the main.js
// file includes javascript but unfortunately mainConfigFile only allows
// json type format or it throws an error, thus another way to spit out that file
// is needed, likely using node to read the file in and spit out a version that
// does not use a variable in the require.config({ ... }). Bummer.

var grunt = require('grunt');

module.exports = {
  production: {
    options: {
      baseUrl: 'tmp',
      // mainConfigFile: 'tmp/main.build.js', // wont work :/ see TODO: remove build duplication
      name: '../bower_components/almond/almond',
      include: ['main'],
      out: 'dist/main.js',
      removeCombined: true,
      findNestedDependencies: true,
      optimize: 'uglify2',
      paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'handlebars': '../bower_components/handlebars/handlebars.runtime',
        'backbone': '../bower_components/backbone/backbone',
        'thorax': '../bower_components/thorax/thorax',
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
    }
  }
};