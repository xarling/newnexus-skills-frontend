'use strict';


angular.module('frontendApp')
  .controller('SkillCtrl', ['$scope', 'Skill', '$log', 'NotificationService', function ($scope, Skill, $log, NotificationService) {

    $scope.alerts = NotificationService.alerts;
    $scope.closeAlert = NotificationService.closeNotification;

    // init get all personen
    $scope.skills = Skill.query();
    $scope.skill = {};

    $scope.addSkill = function () {
      $log.info($scope.skill);
      Skill.save($scope.skill, function (n) {
        $scope.skill = {};
        $scope.refreshSkills();
        NotificationService.addSuccess('Skills is toegevoegd');
      }, function (n) {
        NotificationService.addError('Kan de skill niet toevoegen');
      });
    };


    $scope.deleteSkill = function (item) {
      Skill.delete({skillId: item.id}, function (n) {
        $scope.refreshSkills();
        NotificationService.addSuccess('Skill bestaat niet meer...');
      }, function (n) {
        NotificationService.addError('Kan de persoon niet wissen');
      });
    };

    $scope.refreshSkills = function () {
      $scope.skills = Skill.query();
    };

  }]);
