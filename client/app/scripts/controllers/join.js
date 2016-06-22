'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('JoinCtrl', function ($scope) {
    $scope.games = [
    	{
    		name:'Come Join Us!', 
    		host:'crazyEight',
    		joinCode:'crazyMan'
    	},
    	{
    		name:'The Mancave', 
    		host:'JonBoy',
    		joinCode:'The Big Ragu'
    	},
    	{
    		name:'Jersey City Nights', 
    		host:'Marcus Tate',
    		joinCode:'Path4Ever'
    	}
    ];
  });
