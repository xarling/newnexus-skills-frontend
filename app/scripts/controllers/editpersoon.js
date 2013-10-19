'use strict';


angular.module('frontendApp')
  .controller('EditPersoonCtrl', ['$scope', 'Persoon', '$routeParams', 'Skill', '_', 'ConfigService', '$resource', function ($scope, Persoon, $routeParams, Skill, _, $config, $resource) {
    $scope.selectedSkill;
    $scope.persoon = Persoon.get({id: $routeParams.persoonId});

    //$scope.skills = [];
    $scope.skills = Skill.query();


    $scope.addSkill = function() {
      var skill = $scope.selectedSkill;

      if (_.isNull($scope.persoon.skills) || _isUndefined($scope.persoon.skills)) {
        $scope.persoon.skills = [skill];
      } else {
        $scope.persoon.skills.push(skill);
      }

      var AddSkill = $resource($config.get('resourceBackendUri') + 'persoon/:id/skill');

      AddSkill.save(skill, {id: $scope.persoon.id}, function(n) {
        alert('helemaal goed');
      }, function(n) {
        alert('sjonge, een fout')
      });

      /*$scope.persoon.$update(function(n) {
        alert('saved');
      }, function(n) {
        alert('something is wrong');
      });*/

    };
  }]);