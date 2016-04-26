var workoutControllers = angular.module('workoutControllers', []);

// create the controller and inject Angular's $scope
workoutControllers.controller('mainController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		// create a message to display in our view
		$routeParams.message = 'Welcome to my Workout server!';
	}]);

// create the controller and inject Angular's $scope
workoutControllers.controller('aboutController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		// create a message to display in our view
		$routeParams.message = 'The About Page';
	}]);

// create the controller and inject Angular's $scope
workoutControllers.controller('eccentricUpperController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$routeParams.message = "This is a test.";
	}]);
 