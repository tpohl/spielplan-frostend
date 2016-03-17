'use strict';

/**
 * @ngdoc function
 * @name mySpielplanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mySpielplanApp
 */
angular.module('mySpielplanApp')
  .controller('MainCtrl', function ($http, $scope) {
  	var load = function(){
    $http.get('https://spielplan-pohl.rhcloud.com/rest/community').success(function(data){
    	$scope.communities = data;
    });
};
load();

    $scope.deleteCommunity = function(id){
    	$http.delete('https://spielplan-pohl.rhcloud.com/rest/community/'+id).success(function(){load();});
    };
  });
