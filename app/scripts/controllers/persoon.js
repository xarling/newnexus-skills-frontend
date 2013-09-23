'use strict';


angular.module('frontendApp')
  .controller('PersoonCtrl', ['$scope', 'Persoon', function ($scope, Persoon) {

    $scope.personen = Persoon.query();
  }]);
