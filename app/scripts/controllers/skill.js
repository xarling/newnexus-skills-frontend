'use strict';


angular.module('frontendApp')
  .controller('SkillCtrl', ['$scope', 'Skill', '$log', function ($scope, Skill, $log) {

    // init get all personen
    $scope.skills = Skill.query();
    $scope.skill = {};


    $scope.addSkill = function () {
      $log.info($scope.skill);
      Skill.save($scope.skill, function (n) {
        $scope.skill = {};
        $scope.refreshSkills();
      }, function (n) {
        $log.info("sjonge, deze ging niet lekker" + n);
        alert("probleem met het opslaan");
      });

      //}


    };


    $scope.deleteSkill = function (item) {
      Skill.delete({skillId: item.id}, function (n) {
        $scope.refreshSkills();
      }, function (n) {
        $log.info(n);
        alert("probleem met wissen");
      });
    };

    $scope.refreshSkills = function () {
      $scope.skills = Skill.query();
    };

  }]);
