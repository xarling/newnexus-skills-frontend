'use strict';

angular.module('frontendApp', ['nn.config', 'ngRoute', 'ui.bootstrap', 'ngResource', 'lodash'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', function ($location) {
    $location.html5Mode(true).hashPrefix('!');
  }]
  );

