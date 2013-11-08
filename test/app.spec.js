// TODO: add some app tests !! yah!
//
// - add model tests
// - view tests
// - handlebars helper tests
//
describe('something', function () {
  it('should do something', function () {
    expect(true).to.be.true;
  });
  it('should do something else', function () {
    expect(false).to.be.false;
  });
});

define(['views/root'], function(RootView) {
  describe('App', function() {

    describe('Model', function() {

    });

    describe('Collection', function() {

    });

    describe('Views', function() {
      describe('Root View', function() {
        before(function() {
          this.view = new RootView();
        });

        after(function() {
          this.view.remove();
        });

        it('Should render properly', function() {
          expect(this.view.render()).to.contain('data-layout-cid');
        });
      });
    });

  });
});