var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'login.html'
	})
	.when('/dashboard',{
		resolve:{
		"check":function($rootScope,$location){
			if(!$rootScope.loggedIn){
				$location.path('/');
			}

			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl',function($scope,$location,$rootScope){
	
	$scope.submit=function(){

		if($scope.username =='admin' && $scope.password =='admin'){
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}else
			alert('Wrong Credentials !!');
	};
});



app.controller('people', function($scope,$http){

	$http.get('http://localhost/Users/Santhosh/Desktop/angular_test/database.json')
	.then(function(response){
		$scope.persons = response.data.records;
		console.log(response.data);
	});
});

app.controller('app', function($scope){

	var range = new Array(100);
	$scope.range = range;
})

app.controller('watch', function($scope){

	$scope.counter = 0;

	$scope.$watch('myText', function(OldValue,NewValue){

		if(NewValue!==OldValue)
		$scope.counter++;
	})
})

app.controller('digest', function($scope){

	$scope.myRandomNumber = Math.random();

	document.querySelector('input').addEventListener('click', function(){
		$scope.myRandomNumber = Math.random();
		$scope.$digest();
	})
})