'use strict';

angular.module('frontendApp').factory('NotificationService', ['$timeout', function ($timeout) {
  var _alerts = [];

  var close = function(idx) {
    _alerts.splice(idx, 1);
  };

  var NotificationService = {
    alerts: _alerts,
    addNotification: function (type, msg) {
      var length = _alerts.push({'type': type, 'msg': msg});
      $timeout(function() { close(length-1) }, 5000 );
    },
    addError: function (msg) {
      this.addNotification("error", msg);
    },
    addSuccess: function (msg) {
      this.addNotification("success", msg);
    },
    closeNotification: close

  };

  //var alerts = NotificationService.alerts;

  return NotificationService;
}]);