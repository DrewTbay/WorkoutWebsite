
//Controller for the Eccentric Upper page.
var eccentricUpperControllers = angular.module('eccentricUpperControllers', []);

// create the controller and inject Angular's $scope
eccentricUpperControllers.controller('eccentricUpperController', ['$scope', function($scope) {
	$scope.data = {
		availableOptions: [
			{id: '1', name: 'Option A'},
			{id: '2', name: 'Option B'},
			{id: '3', name: 'Option C'}
		],
		selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    };
}]);