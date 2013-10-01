'use strict';

angular.module('frontendApp').factory('Persoon', ['$resource', 'ConfigService', function ($resource, $config) {
  var Persoon = $resource($config.get('resourceBackendUri') + 'persoon/:id',
    { }, {
      update: { method: 'PUT' }
    }
  );
  return Persoon;
}]);