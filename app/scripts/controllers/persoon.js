'use strict';


angular.module('frontendApp')
  .controller('PersoonCtrl', ['$scope', 'Persoon', '$modal', function ($scope, Persoon, $modal) {

    // init get all personen
    $scope.personen = Persoon.query();

    $scope.saveNew = function () {

      Persoon.save($scope.persoon, function (n) {
        // empty persoon at the end
        $scope.persoon = {};
      }, function (n) {
        // hier gaat het mis. Nu maar even alert
        console.debug("sjonge, deze ging niet lekker" + n);
        alert("probleem met het opslaan");
      });


    };

    $scope.close = function() {
      $modal
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
