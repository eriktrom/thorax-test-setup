describe('The basics of fixtures', function () {
  afterEach(function(){
    fixtures.cleanUp(); // cleans up the fixture for the next test
    fixtures.clearCache();
  });

  describe('Only differences when using karma', function () {
    it("should set 'fixtures/' as the default fixtures path", function(){
      if (typeof window.__karma__ !== "undefined") {
        expect(fixtures.path).to.equal('base/test/fixtures');
      } else {
        expect(fixtures.path).to.equal('fixtures');
      }
    });
    it('can(or cannot) load html fixtures', function () {
      function actualTest() {
        fixtures.load('example2.html');
        expect(fixtures.body()).to.equal("Hello World from html");
      }
      if (typeof window.__karma__ !== "undefined") {
        // if using karma html files are not served, I'm sure there
        // they are put into a string. Fix is possible, but not needed?
        assert.throws(actualTest, AssertionError, "expected 'NOT FOUND' to equal 'Hello World from html'");
      } else {
        actualTest();
      }
    });
  });

  it('can load hbs fixtures', function () {
    fixtures.load('example.hbs');
    expect(fixtures.body()).to.equal("Hello World from hbs");
  });

  it('can load handlebars fixtures', function () {
    fixtures.load('example3.handlebars');
    expect(fixtures.body()).to.equal("Hello World from handlebars");
  });

  it('can read and set', function () {
    var raw = fixtures.read('example.hbs');
    fixtures.set(raw);
    expect(fixtures.body()).to.equal("Hello World from hbs");
  });

});

describe('Compiled HBS fixtures', function () {
  afterEach(function() {
    fixtures.cleanUp(); // cleans up the fixture for the next test
    fixtures.clearCache();
  });

  // same test found in helpers/helpers.spec.js
  // but using hbsFixture here
  it('work with Handlebars.registerHelper (get-excited test)', function () {
    Handlebars.registerHelper('get-excited', function() {
      return new Handlebars.SafeString('Wow, template fixtures');
    });

    var view = new Thorax.View({
      template: hbsFixture('get-excited.hbs')
    });
    view.render();
    expect(view.$('h1').text()).to.eq('Wow, template fixtures');
  });

  // same test found in helpers/view-helpers.spec.js
  // but using hbsFixture here
  it('it works with Handlebars.registerViewHelper (adding machine test)', function () {
    Handlebars.registerViewHelper('on', function (eventName, helperView) {
      helperView.parent.on(eventName, function() {
        helperView.render();
      });
    });

    var view = new Thorax.View({
      template: hbsFixture('adding-machine.hbs'),
      events: {
        incremented: function() {
          ++this.i;
        }
      },
      initialize: function() {
        this.i = 0;
      }
    });

    view.render();
    expect(view.$('[data-view-helper="on"]').text()).to.eq('0');
    view.$('button [data-trigger-event="incremented"]').trigger('click', function() {
      expect(view.$('[data-view-helper]').text()).to.eq('1');
    });
  });
});