'use strict';

/* Controllers */

var registryControllers = angular.module('registryControllers', []);

registryControllers.controller('giftListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('gifts/gifts.json').success(function(data) {
      $scope.gifts = data;
      console.log(data)
    });

    $scope.orderProp = 'id';
  }]);

registryControllers.controller('suggestSongCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

registryControllers.controller('receptionInfoCtrl', ['$scope', 
  function($scope){
  	$scope.map = data;
}])
