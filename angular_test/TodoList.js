var application = angular.module('ToDoApp',[]);

application.controller('ToDoController', function($scope){
	
	$scope.tasks = [];

	/*var taskData = localStorage['tasksList'];
	
	if(taskData !== undefined){
		$scope.tasks = JSON.parse(taskData);
	}*/

	
	$scope.SearchEnter = function(){
		if(event.which == 13 && $scope.task != ''){
			$scope.addTask();
		}
	};
		$scope.addTask = function(){
			$scope.tasks.push({'TaskMessage':$scope.task, 'status': false});
			$scope.task = '';
			localStorage['tasksList'] = JSON.stringify($scope.tasks);
			//console.log(localStorage);
		};
		$scope.contentedit = function(msg){
			//console.log(msg);
			for(i=0;i<$scope.tasks.length;i++){
				if($scope.tasks[i].TaskMessage == msg){
					$scope.tasks[i].TaskMessage = event.target.innerText;
				}
				console.log($scope.tasks);
			}
			//console.log($scope.tasks);
			//localStorage['tasksList'] = JSON.stringify($scope.tasks);
			//console.log(event.target.contentEditable);
			event.target.contentEditable = event.target.contentEditable == 'false' ? 'true' : 'false'; 
		};
		$scope.enteragain = function(msg){
			//console.log("hello");
			if(event.which == 13 && msg != ''){
			$scope.contentedit();
		}
	}
});