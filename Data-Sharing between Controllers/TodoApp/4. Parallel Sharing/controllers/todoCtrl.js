/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $rootScope) {
		
		$scope.todos = [];
		$scope.newTodo = '';

		$scope.addTodo = function () {

			var newTodo = {
				title: $scope.newTodo.trim(),
				completed: false
			};

			if (!newTodo.title) {
				return;
			}
		
			$scope.todos.push(newTodo);
			$scope.newTodo = '';
		}

		$scope.removeTodo = function (todo) {
			$scope.todos.splice(todo,1);
		};

		$scope.toggleCompleted = function (todo) {
			if(todo.completed === true){
				$rootScope.$broadcast('update_completed_todos_from_TodoCtrl', todo);
				$scope.todos.splice(todo,1);
			}
		};
	});

angular.module('todomvc')
	.controller('DoneTodoCtrl', function TodoCtrl($scope, $rootScope) {
		
		$scope.todos = [];
		$scope.newTodo = '';

		$scope.removeTodo = function (todo) {
			$scope.todos.pop(todo);
		};

		$scope.toggleCompleted = function (todo) {
			console.log(todo)
		};

		$rootScope.$on('update_completed_todos_from_TodoCtrl', function(event, todo){
			$scope.todos.push(todo);
		})
	});