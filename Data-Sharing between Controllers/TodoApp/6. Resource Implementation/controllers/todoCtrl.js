/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, todoStorage) {
		

		$scope.todos = [];
		$scope.newTodo = '';
		var todos = todoStorage.todos();
		var todo = todoStorage.todo();

		angular.element(document).ready(function(){
			$scope.loadTodos();
		});

		$scope.loadTodos = function(){
			todos.get(function(successResponse){
				$scope.todos = successResponse.objects;

			},function(errorResponse){
				console.log(errorResponse);
			});
		}
		

		$scope.addTodo = function () {

			var newTodo = {
				title: $scope.newTodo.trim(),
				completed: false
			};

			if (!newTodo.title) {
				return;
			}
		
			todos.post(newTodo, function(successResponse){
				$scope.loadTodos();
				console.log(successResponse);
			},function(errorResponse){
				console.log(errorResponse);
			})

			$scope.newTodo = '';
		}

		$scope.removeTodo = function () {
			
		};

		$scope.toggleCompleted = function (selectedTodo) {
			todo.patch({'id':selectedTodo.id}, selectedTodo, function(successResponse){
				console.log(successResponse);
			},function(errorResponse){
				console.log(errorResponse);
			});
		};


	});

angular.module('todomvc')
	.controller('DoneTodoCtrl', function TodoCtrl($scope, todoStorage) {
		
		$scope.todos = [];
		var todos = todoStorage.todos();
		var todo = todoStorage.todo();

		angular.element(document).ready(function(){
			$scope.loadTodos();
		});

		
		$scope.loadTodos = function(){
			todos.get(function(successResponse){
				$scope.todos = successResponse.objects;

			},function(errorResponse){
				console.log(errorResponse);
			});
		}

		$scope.removeTodo = function () {
			
		};

		$scope.toggleCompleted = function (selectedTodo) {
			todo.patch({'id':selectedTodo.id}, selectedTodo, function(successResponse){
				console.log(successResponse);
			},function(errorResponse){
				console.log(errorResponse);
			});
		};
	});