'use strict';


angular.module('frontendApp')
  .controller('EditPersoonCtrl', ['$scope', 'Persoon', 'Skill', 'AddSkill', 'NotificationService','_', '$routeParams' , function ($scope, Persoon, Skill, AddSkill, NotificationService, _, $routeParams) {
    $scope.selectedSkill;
    $scope.persoon = Persoon.get({id: $routeParams.persoonId});

    $scope.alerts = NotificationService.alerts;
    $scope.closeAlert = NotificationService.closeNotification;

    $scope.skills = Skill.query();

    $scope.save = function () {
      Persoon.update($scope.persoon, function (n) {
        NotificationService.addSuccess('Persoon opgeslagen');
      }, function (n) {
        NotificationService.addError('Oeps, dat ging niet goed.')
      });
    };

    $scope.addSkill = function() {
      var skill = $scope.selectedSkill;
      $scope.initSkillsForPersoon($scope.persoon);
      $scope.persoon.skills.push(skill);
      $scope.addSkillToPersoon(skill, $scope.persoon);
    };

    $scope.initSkillsForPersoon = function(persoon) {
      if (_.isNull(persoon.skills) || _.isUndefined(persoon.skills)) {
        persoon.skills = [];
      }
    };

    $scope.addSkillToPersoon = function(skill, persoon) {
      var skillToAdd = new AddSkill();
      skillToAdd.id = skill.id;
      skillToAdd.naam = skill.naam;

      skillToAdd.$save({persoonId: persoon.id}, function(n) {
        NotificationService.addSuccess('Skill aan persoon toevoegd');
      }, function(n) {
        NotificationService.addError('Oeps, dat ging niet goed.')
      });
    };


  }]);