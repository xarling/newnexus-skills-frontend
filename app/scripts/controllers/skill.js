'use strict';


angular.module('frontendApp')
  .controller('SkillCtrl', ['$scope', 'Skill', function ($scope, Skill) {

    // init get all personen
    $scope.skills = Skill.query();

    $scope.skillToevoegen = false;

    $scope.addSkill = function () {

      console.debug("save");
      Skill.save($scope.skill, function (n) {
        $scope.skill = {};
        $scope.refreshSkills();
      }, function (n) {
        console.debug("sjonge, deze ging niet lekker" + n);
        alert("probleem met het opslaan");
      });


    };


    $scope.deleteSkill = function (item) {
      Skill.delete({skillId: item.id}, function (n) {
        $scope.refreshSkills();
      }, function(n) {
        console.debug(n);
        alert("probleem met wissen");
      });
    };

    $scope.refreshSkills = function () {
      $scope.skills = Skill.query();
    };

  }]);
