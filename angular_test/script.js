var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: './components/home.html',
		controller: 'homectrl'
	}).when('/login',{
		templateUrl: './components/login.html',
		controller: 'loginCtrl'
	}).when('/register',{
		templateUrl: './components/register.html'
	}).otherwise({
		template: '404'
	})
});

app.controller('homectrl',function($scope,$location){
	$scope.goToLogin = function(){
		$location.path('/login');
	};
	$scope.register = function(){
		$location.path('/register');
	};
});

app.controller('loginCtrl', function($scope,$http){
	$scope.login = function(){
		var username = $scope.username;
		var password = $scope.password;
	$http({
		url: 'http://localhost/Users/Santhosh/Desktop/angular_test/server.js',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: 'username='+username+'&password='+password
	}).then(function(response){
		console.log(response.data);
	})
	}
})