'use strict';

angular.module('frontendApp', ['nn.config', 'ui.bootstrap', 'ngResource'])
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
      .when('/persoon-toevoegen', {
        templateUrl: 'views/persoon-toevoegen.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', function ($location) {
    $location.html5Mode(true).hashPrefix('!');
  }]
  );
