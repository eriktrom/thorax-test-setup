
window.mocha.setup('bdd');
window.mocha.checkLeaks();
window.mocha.globals([
  'chai',
  'expect',
  'Handlebars'
]);

define(function(require, exports, module) {
  global.expect = require('chai').expect;
  global.Handlebars = require('handlebars');
  global.Backbone = require('backbone');

  require('./base.spec');

  global.mocha.run();

});