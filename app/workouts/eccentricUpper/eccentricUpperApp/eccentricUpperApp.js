var workoutControllers = angular.module('eccentricUpperController', []);

// create the controller and inject Angular's $scope
workoutControllers.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Welcome to my Workout server!';
});