var grunt = require('grunt');

module.exports = {
  options: {
    livereload: grunt.config('settings.liveReloadPort'),
    debounceDelay: 0,
    interval: 20
  },
  handlebars: {
    files: [grunt.config('paths.templates') + '/**/*.{hbs,handlebars}'],
    tasks: ['scripts:development']
  },
  // TODO: compile on load instead for dev?
  // scripts: {
  //   files: [
  //     grunt.config('paths.js') + '/**/*.{js,coffee}'
  //   ],
  //   tasks: ['scripts:development']
  // },
  styles: {
    files: [grunt.config('paths.css') + '/**/*.{css,sass,scss,less,styl}'],
    tasks: ['styles:development']
  },
  // TODO(karma-grunt): setup karma completely inside of grunt
  karma: {
    // any files related to tests, including templates(compiled)
    files: [
      grunt.config('paths.js') + '/**/*.{js,coffee}',
      '!' + grunt.config('paths.js') + '!js/templates/**/*.{js,coffee}',
      'tmp/templates/**/*.js', // make paths.--
      'test/**/*'
    ],
    tasks: ['karma:server:run']
  },
  other: {
    // like images, fonts
    files: [
      'public/**/*'
    ]
  }
};