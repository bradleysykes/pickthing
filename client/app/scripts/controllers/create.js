'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreateCtrl', function ($scope) {
    $scope.modes = ["Rounds", "Elimination"];
  });
