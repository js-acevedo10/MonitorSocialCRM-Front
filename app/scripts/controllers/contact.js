'use strict';

function getFromDate($scope, $http) {
    $http.get('http://date.jsontest.com')
        .then(
        function(data) {
            $scope.date = data;
        },
        function(err) {
            $scope.errors.apiError = {
                header : 'Ocurrió un error con el API del tiempo',
                msg : err
            };
        });
}

/**
 * @ngdoc function
 * @name monitorSocialCrmFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the monitorSocialCrmFrontApp
 */
angular.module('monitorSocialCrmFrontApp')
  .controller('ContactCtrl', function ($scope, $http, $interval) {
    $scope.errors = {};
    $interval(getFromDate($scope, $http), 5000, true);
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  });