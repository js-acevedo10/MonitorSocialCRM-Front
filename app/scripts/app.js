'use strict';

/**
 * @ngdoc overview
 * @name monitorSocialCrmFrontApp
 * @description
 * # monitorSocialCrmFrontApp
 *
 * Main module of the application.
 */
angular
  .module('monitorSocialCrmFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      .otherwise({
        redirectTo: '/'
      });
  });
