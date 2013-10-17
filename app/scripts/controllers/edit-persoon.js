'use strict';


angular.module('frontendApp')
  .controller('EditPersoonCtrl', ['$scope', 'Persoon', '$routeParams', 'Skill', function ($scope, Persoon, $routeParams, Skill) {
    $scope.selectedSkill = undefined;
    $scope.persoon = Persoon.get($routeParams.id);
    $scope.skills = Skill.query();

  }]);