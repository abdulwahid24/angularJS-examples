/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, todoStorage) {
		
		$scope.todos = todoStorage.list();
		$scope.newTodo = '';

		$scope.addTodo = function () {

			var newTodo = {
				title: $scope.newTodo.trim(),
				completed: false
			};

			if (!newTodo.title) {
				return;
			}
		
			todoStorage.add(newTodo);
			$scope.newTodo = '';
		}

		$scope.removeTodo = function (todo) {
			todoStorage.remove(todo);
		};

		$scope.toggleCompleted = function (index, todo) {
			todoStorage.update(index, todo);
		};


	});

angular.module('todomvc')
	.controller('DoneTodoCtrl', function TodoCtrl($scope, todoStorage) {
		
		$scope.todos = todoStorage.list();
		
		$scope.removeTodo = function (todo) {
			todoStorage.remove(todo);
		};

		$scope.toggleCompleted = function (index, todo) {
			todoStorage.update(index, todo);
		};
	});