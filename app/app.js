// app.js

// create the module and name it hostApp
// also include ngRoute for all our routing needs
var hostApp = angular.module('hostApp', ['ngRoute','workoutControllers']);

// configure our routes
hostApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'app/home/home.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'app/about/about.html',
		controller : 'aboutController'
	})
	
	// route for the Eccentric Upper page
	.when('/eccentricUpper', {
		templateUrl : 'app/workouts/eccentricUpper/eccentricUpper.html',
		controller : 'eccentricUpperController'
	});
}]);