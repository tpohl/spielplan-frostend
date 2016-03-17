'use strict';

/**
 * @ngdoc overview
 * @name mySpielplanApp
 * @description
 * # mySpielplanApp
 *
 * Main module of the application.
 */
angular
  .module('mySpielplanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/season/:seasonId', {
        templateUrl: 'views/season.html',
        controller: 'SeasonCtrl',
        controllerAs: 'season'
      })
      .when('/community/:communityId', {
        templateUrl: 'views/community.html',
        controller: 'CommunityCtrl',
        controllerAs: 'community'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
