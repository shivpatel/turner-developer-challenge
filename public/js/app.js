'use strict';

var app = angular.module('turnerTitleFinder', []);

app.controller("TitleFinderController", function($http, $scope) {
  $scope.titles = [];
  $scope.showTitleDetail = false;
  $scope.selectedTitle = null;
  $http.get('/api/titles').then(function(response) {
    $scope.titles = response.data;
  });
  $scope.selectTitle = function(title) {
    $scope.showTitleDetail = true;
    $scope.selectedTitle = title;
  }
});
