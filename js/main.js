require({
  paths: {
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'handlebars': '../bower_components/handlebars/handlebars.runtime',
    'backbone': '../bower_components/backbone/backbone',
    'thorax': '../bower_components/thorax/thorax',
    'templates': '../tmp/templates',
    'coffee-script': '../bower_components/coffee-script/index',
    'cs': '../bower_components/require-cs/cs'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'backbone': {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    'underscore': {
      exports: '_'
    },
    'thorax': {
      exports: 'Thorax',
      deps: ['handlebars', 'backbone']
    }
  }
}, [
  'jquery',

  'backbone',
  'views/root',
  'routers/todo-list',
  'helpers',
], function ($, Backbone, RootView, TodoListRouter ) {

  initialize(function(next) {
    // Load any data that your app requires to boot
    // and initialize all routers here, the callback
    // `next` is provided in case the operations
    // needed are aysynchronous
    new TodoListRouter();

    next();
  });

  function initialize(complete) {
    $(function() {
      Backbone.history.start({
        pushState: false,
        root: '/',
        silent: true
      });

      // RootView may use link or url helpers which
      // depend on Backbone history being setup
      // so need to wait to loadUrl() (which will)
      // actually execute the route
      RootView.getInstance(document.body);

      complete(function() {
        Backbone.history.loadUrl();
      });
    });
  }

});
