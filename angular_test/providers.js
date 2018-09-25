var application = angular.module('myApp', []);

application.provider('date', function(){
	var greet;
	return{

		setGreeting : function(value){
			greet = value;
		},

		$get : function(){
			return{
				showDate : function(){
					var date = new Date();
					return greet+ "Its" +date.getHours();

				},

				devShowDate : function(){
					var date = new Date();
					return date.getHours();
					
				}
			}
		}
	}
	
});

application.config(function(dateProvider) {

	var time = dateProvider.$get().devShowDate();

	if(time > 5 && time < 12){
		dateProvider.setGreeting("Good Morning");
	} else if(time > 12 && time < 16) {
		dateProvider.setGreeting("Good Afternoon");	
	} else if(time >16 && time <20) {
		dateProvider.setGreeting("Good Evening");
	} else {
		dateProvider.setGreeting("Good Night");	
	}
});

application.controller('servicecontroller', function($scope,date){

	$scope.greetMessage = date.showDate();
});

application.service('fromservice', function(){

	this.message = 'This is from service !';
});

application.factory('fromfactory', function(){

	factory = {};
	factory.message = 'This is from factory !!';
	return factory;
});

application.provider('fromprovider', function(){
	var m1 = 'This is from provider';
	return {

		setAname: function(name){
			m1 += " "+name;
		},

		$get: function(){
			return {
				message:m1
			}
		}
	}
});

application.config(function(fromproviderProvider){
	fromproviderProvider.setAname("Hello Santhosh !!");
})

application.controller('app', function($scope,fromprovider,fromfactory,fromservice){
	$scope.greetMessage = [fromprovider.message,fromfactory.message,fromservice.message];
})