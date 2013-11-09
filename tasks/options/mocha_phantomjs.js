var grunt = require('grunt');

var url = 'http://' +
          grunt.config('settings.hostname') +
          ':' + 8001 + // TODO: CIServer port
          '/test/index.html';

module.exports = {
  all: {
    options: {
      urls: [url]
    }
  }
}