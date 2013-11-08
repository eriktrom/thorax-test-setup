define(function(require) {
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
});