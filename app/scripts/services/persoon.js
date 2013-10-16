'use strict';

angular.module('frontendApp').factory('Persoon', ['$resource', 'ConfigService', function ($resource, $config) {
  var Persoon = $resource($config.get('resourceBackendUri') + 'persoon/:id',
    {id: '@id' }, {
      update: { method: 'PUT' },
      remove: { method: 'DELETE', params: { skillId: '@skillId' }, headers: { 'Content-Type': 'application/json' } }
    }

  );
  return Persoon;
}]);