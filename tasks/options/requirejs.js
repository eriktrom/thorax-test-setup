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
//   - the process is similar but outputs to tmpDist before running the r.js
//     optimizer
//   - The final ouput is wrapped in almond.js and concatenated + minified to
//     dist/main.js.


// TODO: DRY require.js paths/shims
// - search everywhere for the above phrase to find them all(or use sublime plugin)
// The short of it is this isn't needed and is slow, only use for production
// The long of it is coffeescript support needs to be handled and the duplication
// of paths and shims needs to be handled.

var grunt = require('grunt');

module.exports = {
  // development: getRequireJSOptions('development'),
  production: getRequireJSOptions('production')
};

function merge(original, updates) {
  for (var prop in updates) {
    original[prop] = updates[prop];
  }
}

function getRequireJSOptions(env) {
  var options = {
    // TODO: DRY require.js paths/shims
    paths: {
      'jquery': '../bower_components/jquery/jquery',
      'underscore': '../bower_components/underscore/underscore',
      'handlebars': '../bower_components/handlebars/handlebars.runtime',
      'backbone': '../bower_components/backbone/backbone',
      'thorax': '../bower_components/thorax/thorax',
      'bootstrap': '../bower_components/bootstrap/js/bootstrap'
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
      'bootstrap': { // TODO: generator is outputting bootstrap when option is not chosen(likely to leave b/c only going to be used for less anyway?)
        deps: ['jquery']
      }
    }
  };

  // I should have never been born
  // var devOptions = {
  //   appDir: grunt.config('paths.js'),
  //   baseUrl: './',
  //   dir: grunt.config('paths.output.js'),
  //   keepBuildDir: true,
  //   optimize: 'none',
  //   modules: [{name: 'main'}]
  // };

  var prodOptions = {
    almond: true,
    name: 'requireLib',
    include: ['main'],
    baseUrl: grunt.config('paths.tmpDist'),
    out: grunt.config('paths.distOutput.js'),
    removeCombined: true,
    findNestedDependencies: true,
    optimize: 'uglify2'
  };

  // if (env === 'development') merge(options, devOptions); // TODO: DRY require.js paths/shims
  if (env === 'production') {
    merge(options, prodOptions);
    options.paths.requireLib = 'almond';
  }

  return {
    options: options
  };
}

