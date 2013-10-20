'use strict';


angular.module('frontendApp')
  .controller('PersoonCtrl', ['$scope', 'Persoon', '$modal', 'Skill', function ($scope, Persoon, $modal, Skill) {

    $scope.selectedSkill = undefined;
    $scope.skills = Skill.query();
    // init get all personen
    $scope.personen = Persoon.query();

    $scope.save = function () {
      Persoon.save($scope.persoon, function (n) {
        // empty persoon at the end
        $scope.persoon = {};
      }, function (n) {
        // hier gaat het mis. Nu maar even alert
        alert("probleem met het opslaan");
      });
    };

    $scope.delete = function(persoon) {
      Persoon.delete({id: persoon.id}, function(n) {
        // gaan we hier de persoon uit de lijst halen, of een nieuwe query?
        $scope.personen = Persoon.query();
      }, function(n) {
        alert('weer een probleem');
      })
    };


    $scope.open = function() {
       var modalInstance = $modal.open({
         templateUrl: 'modalContent.html',
         controller: ModalInstanceCtrl,
         backdrop: true,
         backdropClick: true,
         resolve: {
           //items: function() {
             //return $scope.items;
             //alert('resolve stuff here');
           //}
         }
       });

      modalInstance.result.then(function (selectedItem) {
        //$scope.selected = selectedItem;
      }, function() {
        //dismissed code here
      })
    }

    var ModalInstanceCtrl = function($scope, $modalInstance) {
      $scope.close = function(result){
        $modalInstance.close(result);
      };

    };

  }]);
