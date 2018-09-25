var application = angular.module('myApp', [])

application.service('random', function(){

	var num = Math.floor(Math.random()*10);

	this.generate = function(){

		return num;

	}
});

application.factory('random1', function(){

	var randomObject = {};
	var num = Math.floor(Math.random()*10);
	randomObject.generate = function(){
		return num;
	}

	return randomObject;

});

application.controller('app', function($scope,random1){

	$scope.generateRandomNumber = function(){

		$scope.randomNumber = random1.generate();
	}
});