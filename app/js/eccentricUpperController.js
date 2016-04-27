
//Controller for the Eccentric Upper page.
var eccentricUpperControllers = angular.module('eccentricUpperControllers', []);

// create the controller and inject Angular's $scope
eccentricUpperControllers.controller('eccentricUpperController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.message = "This is a test.";
	}]);