var workoutControllers = angular.module('workoutControllers', []);

// create the controller and inject Angular's $scope
workoutControllers.controller('mainController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		// create a message to display in our view
		$scope.message = 'Welcome to my Workout server!';
	}]);

// create the controller and inject Angular's $scope
workoutControllers.controller('aboutController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		// create a message to display in our view
		$scope.message = 'The About Page';
	}]);
 