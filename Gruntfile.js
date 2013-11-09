/**
 *
 * Configuration options are loaded from files in tasks/options
 *
 * Normally inside this file you'd see:
 *
 * clean: {
 *   development: ['file-to-clean']
 * }
 *
 * Instead the file at tasks/options/clean.js contains:
 *
 * module.exports = {
 *   development: ['file-to-clean']
 * }
 *
 * Sharing Configuration Options:
 *
 * Configuration options used across multiple modules are set in the following
 * manner:
 *
 * `grunt.config('settings', settings);`
 * `grunt.config('paths', settings.paths);`
 *
 *
 * Furthermore, getting those options occurs in a similar fashion:
 *
 * `grunt.config('paths.output.js');` //=> public/js
 *
 * Using the conventional <%= paths.output.js %> will NOT work
 *
 * TODO: bad docs for newbs here, make better
 */

module.exports = function(grunt) {

  var settings = {
    liveReloadPort: 35729 || process.env.LRPort,
    port: process.env.PORT || 8000,
    hostname: 'localhost',
    templates: {},
    paths: {
      'public': 'public',
      dist: 'dist',
      tmpDist: 'tmpDist',
      // TODO: change tmpDist to tmp eventually, probably cause of templates
      distOutput: {
        js: 'dist/main.js',
      },
      output: {
        js: 'public/js',
        css: 'public/css'
      },
      js: 'js',
      css: 'css',
      templates: 'js/templates',
      views: 'js/views',
      models: 'js/models',
      collections: 'js/collections'
    }
  };

  grunt.config('settings', settings);
  grunt.config('paths', settings.paths);

  grunt.loadNpmTasks('thorax-inspector');
  grunt.loadTasks('tasks');

  grunt.registerTask('scripts:development', [
    // 'clean:scripts',
    // 'copy:requirejs',

    // TODO(CS: only doing templates makes this super fast
    // but beware CS support is going to mess up this awesomeness
    // the current option I have in mind is to just have a coffee/
    // dir that outputs js and leave the super fastness. That would mean
    // no public/js or r.js compilation(takes forever) in development at all

    'clean:templates',
    'templates:tmp'

    // 'requirejs:development' // TODO: ur really slow dude, especially during tdd
  ]);

  grunt.registerTask('styles:development', [
    'clean:styles',
    'styles'
  ]);

  grunt.registerTask('default', [
    // 'ensure-installed',
    'scripts:development',
    'styles:development',
    'thorax:inspector',
    'karma:server',
    'connect:development',
    // TODO, bug, browser windows don't close themselves, every time you run grunt, new window,
    // live reload runs in all of them, they all reload, ur system crawls to a halt.
    'open-browser:dev', // it's convenient :) but leaks memory, cpu cycles :(
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:templates',
    'templates:tmp',
    'karma:ci'
  ]);

  grunt.registerTask('phtest', [
    'clean:templates',
    'templates:tmp',
    'connect:CIServer',
    'mocha_phantomjs'
  ]);

  grunt.registerTask('production', [
    'clean:production',
    'styles:development',
    'cssmin',
    'templates:tmpDist',
    'copy:tmpDist',
    'requirejs:production',
    'open-browser:dist',
    'connect:production'
  ]);

  require('load-grunt-config')(grunt, {
    configPath: __dirname + '/tasks/options'
  });

};
