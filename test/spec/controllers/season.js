'use strict';

describe('Controller: SeasonCtrl', function () {

  // load the controller's module
  beforeEach(module('mySpielplanApp'));

  var SeasonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeasonCtrl = $controller('SeasonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeasonCtrl.awesomeThings.length).toBe(3);
  });
});
