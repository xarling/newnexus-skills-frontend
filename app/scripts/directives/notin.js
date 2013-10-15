'use strict';

angular.module('frontendApp').directive('notIn', ['$parse', '_', function ($parse, _) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      // add a parser that will process each time the value is
      // parsed into the model when the user updates it.
      ctrl.$parsers.unshift(function (value) {
        var valid = false;
        if (_.isEmpty(value)) {
          valid = true;
          ctrl.$setPristine();

        } else {
          valid = check(attrs, value);
        }
        return valid ? value : undefined;
      });

      // add a formatter that will process each time the value
      // is updated on the DOM element.
      ctrl.$formatters.unshift(function(value) {
        check(attrs, value);
        return value;
      });

      function check(attrs, value) {
        // need to do this parsing, because attrs.containsItems is a string
        var containsItems = $parse(attrs.notInItems)(scope);
        var items = _.filter(containsItems, function(item) {
          return item[attrs.notInValue].toUpperCase() === value.toUpperCase();
        });
        var valid = _.isEmpty(items);
        ctrl.$setValidity('notIn', valid);
        return valid;
      };
    }
  };
}]);