
//Controller for the Eccentric Upper page.
var eccentricUpperControllers = angular.module('eccentricUpperControllers', []);

// create the controller and inject Angular's $scope
eccentricUpperControllers.controller('eccentricUpperController', ['$scope', function($scope) {
	$scope.standardPushups = {
		availableOptions: [
			{id: '1', name: 'One'},
			{id: '2', name: 'Two'},
			{id: '3', name: 'Three'},
			{id: '4', name: 'Four'},
			{id: '5', name: 'Five'},
			{id: '6', name: 'Six'},
			{id: '7', name: 'Seven'},
			{id: '8', name: 'Eight'},
			{id: '9', name: 'Nine'},
			{id: '10', name: 'Ten'}
		],
		selectedOption: {id: '10', name: 'Ten'}
    };
	$scope.standardPullUps = {
		availableOptions: [
			{id: '1', name: 'One'},
			{id: '2', name: 'Two'},
			{id: '3', name: 'Three'},
			{id: '4', name: 'Four'},
			{id: '5', name: 'Five'},
			{id: '6', name: 'Six'},
			{id: '7', name: 'Seven'},
			{id: '8', name: 'Eight'},
			{id: '9', name: 'Nine'},
			{id: '10', name: 'Ten'}
		],
		selectedOption: {id: '8', name: 'Eight'}
    };
	
}]);