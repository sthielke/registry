'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('giftListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('gifts/gifts.json').success(function(data) {
      $scope.gifts = data;
      console.log(data)
    });

    $scope.orderProp = 'id';
  }]);

phonecatControllers.controller('suggestSongCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

phonecatControllers.controller('receptionInfoCtrl', ['$scope', 
  function($scope){
  	$scope.map = data;
}])
