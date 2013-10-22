'use strict';


angular.module('frontendApp')
  .controller('PersoonCtrl', ['$scope', 'Persoon', 'Skill', 'NotificationService', function ($scope, Persoon, Skill, NotificationService) {
    $scope.alerts = NotificationService.alerts;
    $scope.closeAlert = NotificationService.closeNotification;


    $scope.selectedSkill = undefined;
    $scope.skills = Skill.query();
    // init get all personen
    $scope.personen = Persoon.query();

    $scope.save = function () {
      Persoon.save($scope.persoon, function (n) {
        // empty persoon at the end
        $scope.persoon = {};
        NotificationService.addSuccess('Persoon opgeslagen');
      }, function (n) {
        // hier gaat het mis. Nu maar even alert
        NotificationService.addError("probleem met het opslaan");
      });
    };

    $scope.delete = function(persoon) {
      Persoon.delete({id: persoon.id}, function(n) {
        // gaan we hier de persoon uit de lijst halen, of een nieuwe query?
        $scope.personen = Persoon.query();
        NotificationService.addSuccess('De persoon bestaat niet meer...');
      }, function(n) {
        NotificationService.addError("probleem met het wissen");
      })
    };


  }]);
