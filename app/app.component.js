(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: 'app/templatePages/eccentricUpper.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));