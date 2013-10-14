'use strict';

angular.module('frontendApp').factory('Skill', ['$resource', 'ConfigService', function ($resource, $config) {
  var Skill = $resource($config.get('resourceBackendUri') + 'skill/:skillId',
    {skillId: '@skillId' }, {
      update: { method: 'PUT', params: {skillId: '@skillId'}, headers: {
        'Content-Type': 'application/json'
      }},
      remove: {method: 'DELETE', params: {skillId: '@skillId'}, headers: {
        'Content-Type': 'application/json'
      }}
    }
  );
  return Skill;
}]);