define(function(require) {
  // mocha and friends
  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');

  global.sinon = require("sinon");
  global.chai = require("chai");
  global.should = require("chai").should();
  global.expect = require("chai").expect;
  global.AssertionError = require("chai").AssertionError;

  // https://github.com/domenic/sinon-chai/blob/master/test/throwing.coffee
  global.swallow = function (thrower) {
    try {
      thrower();
    } catch (e) { }
  };

  var sinonChai = require("sinon-chai");
  chai.use(sinonChai);

  // unique to thorax apps
  global.Handlebars = require('handlebars');
  global.Backbone = require('backbone');
  global.Thorax = require('thorax');

  // require test files, then run mocha when they're async loaded
  require([
    './base.spec'
  ], function() { // run mocha
    global.mocha.run();
  });
});