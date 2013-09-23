'use strict';

angular.module('nn.config', [])
  .factory('ConfigService', function() {
    var ENV = {
      PROD: 0,
      TEST: 1,
      DEV: 2
    };

    var currentEnv = ENV.DEV;

    var allConfigs = [{
      env: ENV.DEV,
      backendUri: 'http://localhost\:8081/api.php/',
      resourceBackendUri: 'http://localhost\\:8081/nn-skills/api/',
      apikey: 'LKlkjkljalksjdf893'
    }, {
      env: ENV.TEST,
      backendUri: '',
      resourceBackendUri: '',
      apikey: 'llaskdjfoaiuywerh'
    }];

    // change this to use a filter, but for that include lo-dash
    var config = allConfigs[0];

    return {
      get: function(id) {
        if (!$.inArray(id, config)) {
          throw "id " + id + " not in configuration";
        }
        return config[id];
      }
    };
  });
