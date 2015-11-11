'use strict';

/**
 * @ngdoc function
 * @name monitorSocialCrmFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the monitorSocialCrmFrontApp
 */
angular.module('monitorSocialCrmFrontApp')
  .controller('ContactCtrl', function ($scope, $http) {
    
    $http.get('http://date.jsontest.com').
        success(function(data) {
            $scope.date = data;
        });
    
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  }
);