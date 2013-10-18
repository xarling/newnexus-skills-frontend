'use strict';

angular.module('frontendApp').factory('Persoon', ['$resource', 'ConfigService', function ($resource, $config) {
  var Persoon = $resource($config.get('resourceBackendUri') + 'persoon/:id',
    {id: '@id' }, {
      update: { method: 'PUT' },
      remove: { method: 'DELETE', params: { id: '@id' }, headers: { 'Content-Type': 'application/json' } }
    }

  );
  return Persoon;
}]);