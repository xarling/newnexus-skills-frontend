'use strict';


angular.module('frontendApp')
  .controller('PersoonCtrl', ['$scope', 'Persoon', function ($scope, Persoon) {

    // init get all personen
    $scope.personen = Persoon.query();

    $scope.saveNew = function() {

      Persoon.save($scope.nieuwPersoon, function(n) {
        // empty persoon at the end
        $scope.nieuwPersoon = {};
      }, function(n) {
        // hier gaat het mis. Nu maar even alert
        console.debug("sjonge, deze ging niet lekker" + n );
        alert("probleem met het opslaan");
      });


    };

  }]);
