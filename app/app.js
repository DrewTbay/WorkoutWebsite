// app.js

// create the module and name it hostApp
// also include ngRoute for all our routing needs
var hostApp = angular.module('hostApp', ['ngRoute']);

// configure our routes
hostApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'app/home/home.html',
		controller : 'mainController'
	})
	
	// route for the home page
	.when('/home', {
		templateUrl : 'app/home/home.html',
		controller : 'homeController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'app/about/about.html',
		controller : 'aboutController'
	});
	
	// route for the Eccentric Upper page
	.when('/workouts/eccentricUpper', {
		templateUrl : 'app//workouts/eccentricUpper/eccentricUpper.html',
		controller : 'aboutController'
	});
});

// create the controller and inject Angular's $scope
hostApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Welcome to my Workout server! grrrrrrr....';
});

// create the controller and inject Angular's $scope
hostApp.controller('homeController', function($scope) {
	// create a message to display in our view
	$scope.message = 'This is the home page';
});

hostApp.controller('aboutController', function($scope) {
	$scope.message = 'This is the about page.';
});