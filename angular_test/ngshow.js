var application = angular.module('app', []);

application.controller('show', function($scope){
	$scope.show = 'msg1';
	$scope.toggle = function(){
		$scope.show = $scope.show == 'msg1' ? 'msg2' : 'msg1';
	}
});