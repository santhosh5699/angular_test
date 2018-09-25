var app = angular.module('myApp', []);

app.filter('base', function(){

	var something = function(input,base){

		var parsed = parseInt(input,10);
		var based = parseInt(base,10);

		if(isNaN(parsed) || isNaN(based) || based<=1 || based>=37)
			return 'Invalid Base !!'
		return parsed.toString(based);
	}
		return something;
})

app.controller('customcontroller', function($scope){
	$scope.controllerproperty = 'This is controller Property'
	$scope.name1 = 'Hello Santhosh !!'
	$scope.age = 24
	$scope.alertName = function(){
		alert($scope.name1);
	}
});

app.directive('myFirstDirective', function(){
	
	function linkFunction ($scope,elems,attrs){
		$scope.name = 'Hello World !';
		$scope.changeName = function(newName){
			$scope.name = $scope.controllerproperty;
		}
	}

	return {
		template: ['<span ng-click="changeName()">Current Text: {{name}}',
					'<p> This name is from directive {{ name1 }}</p>',
					'<p> Enter new name: <input type="text" ng-model="name1"</p>',
					'<p> This age is from directive {{ age }}',
					'<p> Enter new age here: <input type="text" ng-model="age"</p>',
					'<p> <input type="button" value="From Directive" ng-click="func()"></p>'].join(''),
		restrict: 'EA',
		scope: {
			name1 : '@',
			age : '=',
			func : '&'
		},
		link: linkFunction

	};
});

//@--text bind
//=-- two way bind
//&--one way bind