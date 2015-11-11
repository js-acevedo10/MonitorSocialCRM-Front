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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
