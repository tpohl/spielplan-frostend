'use strict';

/**
 * @ngdoc function
 * @name mySpielplanApp.controller:CommunityCtrl
 * @description
 * # CommunityCtrl
 * Controller of the mySpielplanApp
 */
angular.module('mySpielplanApp')
  .controller('CommunityCtrl', function ($scope, $routeParams, $http) {


	var communityId = $routeParams.communityId;

	$http.get('https://spielplan-pohl.rhcloud.com/rest/community/'+communityId).success(function(data){
    	$scope.community = data;
    });
$http.get('https://spielplan-pohl.rhcloud.com/rest/community/'+communityId+'/seasons').success(function(data){
    	$scope.community.seasons = data;
    });
  	
  });
