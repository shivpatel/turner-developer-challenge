'use strict';

describe('Turner Title Finder', function() {

  var TitleFinderController,
      scope,
      backend;

  beforeEach(module('turnerTitleFinder'));

  beforeEach(inject(function($httpBackend) {
    backend = $httpBackend;
    backend.expect("GET", "/api/titles").respond([{}]);
  }));

  beforeEach(inject(function($rootScope, $controller, $http) {
    scope = $rootScope.$new();
    TitleFinderController = $controller('TitleFinderController', {
      $scope: scope,
      $http: $http
    });
    backend.flush();
  }));

  it('should make a Ajax request', function() {
    backend.verifyNoOutstandingExpectation();
  });

  it('should process the data', function() {
    expect(scope.titles.length).toEqual(1);
  });

  it('should not show title detail div by default', function() {
    expect(scope.showTitleDetail).toEqual(false);
  });

  it('should allow title detail view when title selected', function() {
    scope.selectTitle(null); // arbitrary value
    expect(scope.showTitleDetail).toEqual(true);
  });

});
