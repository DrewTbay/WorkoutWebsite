var workoutControllers = angular.module('workoutControllers', []);

// create the controller and inject Angular's $scope
workoutControllers.controller('eccentricUpperController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = "This is a test.";
  }]);
 