var workoutControllers = angular.module('workoutControllers', []);

// create the controller and inject Angular's $scope
hostApp.controller('mainController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    	// create a message to display in our view
	$scope.message = 'Welcome to my Workout server!';
  }]);

// create the controller and inject Angular's $scope
hostApp.controller('aboutController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    	// create a message to display in our view
	$scope.message = 'The About Page';
  }]);

// create the controller and inject Angular's $scope
workoutControllers.controller('eccentricUpperController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = "This is a test.";
  }]);
 