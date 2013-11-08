var grunt = require('grunt');

module.exports = {
  options: {
    livereload: grunt.config('settings.liveReloadPort'),
    debounceDelay: 20
  },
  handlebars: {
    files: [grunt.config('paths.templates') + '/**/*.{hbs,handlebars}'],
    tasks: ['scripts:development']
  },
  scripts: {
    files: [
      grunt.config('paths.js') + '/**/*.{js,coffee}'
    ],
    tasks: ['scripts:development']
  },
  styles: {
    files: [grunt.config('paths.css') + '/**/*.{css,sass,scss,less,styl}'],
    tasks: ['styles:development']
  },
  other: {
    files: [
      'public/**/*',
      grunt.config('paths.js') + '/**/*.{js,coffee}',
      '!' + grunt.config('paths.js') + '/templates/**/*.{js,coffee}',
      'tmp/templates/**/*.js', // make paths.--
      'test/**/*'
    ]
  }
};