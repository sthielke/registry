'use strict';

/* App Module */

var registryApp = angular.module('registryApp', [
  'ngRoute',
  'registryControllers'
]);

registryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/gifts', {
        templateUrl: 'templates/gift-picker-tmp.html',
        controller: 'giftListCtrl'
      }).
      when('/song', {
        templateUrl: 'templates/song-suggestion-tmp.html',
        controller: 'suggestSongCtrl'
      }).
      when('/reception',{
        templateUrl: 'templates/reception-info-tmpl.html',
        controller: 'receptionInfoCtrl'
      }).
      otherwise({
        redirectTo: '/gifts'
      });
  }]);
