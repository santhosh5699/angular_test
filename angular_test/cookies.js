var app = angular.module('myApp', ['ngCookies']);

app.controller('cookieController', function($scope,$cookies){
	$scope.myCookieVal = $cookies.get('cookie');
	//console.log(myCookieVal);
	$scope.cookieValue = function(val){
		$cookies.put('cookie',val);
	};
});