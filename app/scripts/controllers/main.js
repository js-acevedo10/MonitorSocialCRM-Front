'use strict';

/**
 * @ngdoc function
 * @name monitorSocialCrmFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the monitorSocialCrmFrontApp
 */
angular.module('monitorSocialCrmFrontApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.errors = {};
    $scope.numLlamadas = 0;
    
    var herokk = function() {
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
        $scope.numLlamadas = $scope.numLlamadas + 1;
        $timeout(herokk, 5000);
    };
    
    $timeout(herokk, 5000);
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });