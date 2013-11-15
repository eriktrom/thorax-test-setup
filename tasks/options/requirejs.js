// This file builds main.js
//
// In development:
//   - main.js is located in public/ and all .js files are copied
//   over verbatum from app/js to public/js.
//   - templates are preprocessed and provided as .js files at public/templates/*.js.
//   - requirejs is used to resolve modules from files on page load for an easier
//     debugging experience.
//
// In production:
//   - the process is similar but outputs to tmp before running the r.js
//     optimizer
//   - The final ouput is wrapped in almond.js and concatenated + minified to
//     dist/main.js.


// TODO: DRY require.js paths/shims
// - search everywhere for the above phrase to find them all(or use sublime plugin)
// The short of it is this isn't needed and is slow, only use for production
// The long of it is coffeescript support needs to be handled and the duplication
// of paths and shims needs to be handled.
// EDIT: coffeescript support could be compile on load

var grunt = require('grunt');

module.exports = {
  production: {
    options: {
      mainConfigFile: 'build.js',
      baseUrl: 'tmp',
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
        // 'templates': './templates',
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