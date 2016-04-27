var eccentricUpperControllers = angular.module('eccentricUpperController', []);

// create the controller and inject Angular's $scope
eccentricUpperControllers.controller('eccentricUpperController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.message = "This is a test.";
	}]);