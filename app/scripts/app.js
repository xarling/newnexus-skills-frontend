'use strict';

angular.module('frontendApp', ['nn.config','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/persoon', {
        templateUrl: 'views/persoon.html',
        controller: 'PersoonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', function ($location) {
    $location.html5Mode(true).hashPrefix('!');
  }]
  );
