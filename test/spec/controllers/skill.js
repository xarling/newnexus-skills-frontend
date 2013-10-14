'use strict';

describe('Controller: SkillContrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var SkillCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend, $controller, $rootScope, $injector) {
    // set up the http backend mock
    //$httpBackend = $injector.get('$httBackend');
    var lodash =  $injector.get('_');

    $httpBackend.when('GET', 'http://localhost:8081/api/skill').respond([]);

    scope = $rootScope.$new();

    dump(lodash);

    SkillCtrl = $controller('SkillCtrl', {
      $scope: scope,
      _: { filter: function(test,test2) {
        dump('calling filter')
      }}
    });
  }));

  it('should check if skill already exists', function () {
    var skills = [
      {$$hashKey: "004", id: 1, naam: 'JSF'},
      {$$hashKey: "002", id: 3, naam: '#NET'},
      {$$hashKey: "005", id: 2, naam: 'Spring'}
    ];
    expect(scope.skillExists("JSF", skills)).toBe(true);
    expect(scope.skillExists("AngularJS", skills)).toBe(false);
  });
});
