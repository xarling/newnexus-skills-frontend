'use strict';

angular.module('frontendApp', ['nn.config', 'ngRoute', 'ui.bootstrap', 'ngResource', 'lodash'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/personen', {
        templateUrl: 'views/personen.html',
        controller: 'PersoonCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skill.html',
        controller: 'SkillCtrl'
      })
      .when('/persoon', {
        templateUrl: 'views/persoon.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', function ($location) {
    $location.html5Mode(true).hashPrefix('!');
  }]
  );

