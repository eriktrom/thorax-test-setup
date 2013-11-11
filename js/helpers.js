define(['handlebars'], function (Handlebars) {

  // Register a normal handlebars helper
  Handlebars.registerHelper('greeting', function () {
    return new Handlebars.SafeString('Hello World');
  });


  // Register any view helpers you want available to Handlebars
  // Handlebars.registerViewHelper('helper', function () {

  // });
});
