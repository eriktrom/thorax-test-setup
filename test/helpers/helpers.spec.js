describe('greeting helper defined in helpers.js', function () {
  it('should ouput a greeting', function () {
    var view = new Thorax.View({
      template: Handlebars.compile('<h1>{{greeting}}</h1>')
    });
    view.render();
    expect(view.$('h1').text()).to.eq('Hello World');
  });
});

describe('locally defined helper', function () {
  beforeEach(function () {
    Handlebars.registerHelper('another-greeting', function() {
      return new Handlebars.SafeString('Hello World 2');
    });
  });

  it('should output another greeting', function () {
    var view = new Thorax.View({
      template: Handlebars.compile('<h1>{{another-greeting}}</h1>')
    });
    view.render();
    expect(view.$('h1').text()).to.eq('Hello World 2');
  });
});

describe('integration test that helper outputs in the real app', function () {
  it('should render the helper output', function () {
    define(function(require) {
      var RootView = require('views/root');
        RootView.render();
        expect(RootView.$('h1').text()).to.eq('Hello World');
    });
  });
});