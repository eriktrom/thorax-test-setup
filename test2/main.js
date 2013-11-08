require.config({
  paths: {
    thorax: '../bower_components/thorax/thorax',
    Handlebars: '../bower_components/handlebars/handlebars.runtime',
    jquery: '../bower_components/jquery/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    mocha: '../bower_components/mocha/mocha',
    sinon: '../bower_components/sinon/lib/sinon',
    'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai',
    chai: '../bower_components/chai/chai'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    Handlebars: {
      exports: 'Handlebars'
    },
    thorax: {
      deps: ['backbone', 'Handlebars', 'hbs'],
      exports: 'Thorax'
    }
  }
}, [
  'mocha',
  'chai',
  './base.spec'
], function(mocha, chai) {
  global.expect = chai.expect;
  mocha.setup('bdd');
  mocha.checkLeaks();
  mocha.globals(['Handlebars']);
  mocha.run();
});