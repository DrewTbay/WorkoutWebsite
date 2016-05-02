(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateurl: 'app/templatePages/eccentricUpper.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));