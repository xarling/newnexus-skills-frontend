'use strict';

angular.module('frontendApp').factory('Skill', ['$resource', 'ConfigService', function ($resource, $config) {
  var Skill = $resource($config.get('resourceBackendUri') + 'skill/:skillId',
    {skillId:'@skillId' }, {
      update: { method: 'PUT', params: {skillId: '@skillId'}},
      remove: {method:'DELETE', params: {skillId: '@skillId'}}
    }
  );
  return Skill;
}]);