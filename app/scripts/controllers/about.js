'use strict';

/**
 * @ngdoc function
 * @name monitorSocialCrmFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the monitorSocialCrmFrontApp
 */
angular.module('monitorSocialCrmFrontApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.errors = {};
    $http.get('https://monitor-prueba-social-1.herokuapp.com/mensajes')
        .then(
        function(data) {
            $scope.herokuMessage = data.data;    
        },
        function(err) {
            $scope.errors.herokuError = {
                encabezado : 'Error en el servidor:',
                error : err
            };
        });
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
