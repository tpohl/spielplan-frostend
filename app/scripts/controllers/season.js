'use strict';

/**
 * @ngdoc function
 * @name mySpielplanApp.controller:SeasonCtrl
 * @description
 * # SeasonCtrl
 * Controller of the mySpielplanApp
 */
angular.module('mySpielplanApp')
  .controller('SeasonCtrl', function ($scope, $routeParams, $http) {
    $scope.helloWorld = 'helloWorld';

	var seasonId = $routeParams.seasonId;
    $scope.seasonId = seasonId;
    $http.get('https://spielplan-pohl.rhcloud.com/rest/season/'+seasonId+'/games').success(function(data){
    	$scope.games = data;
    });
  });
