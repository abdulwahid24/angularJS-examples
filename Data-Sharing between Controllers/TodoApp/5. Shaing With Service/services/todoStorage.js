/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('todomvc')
	.service('todoStorage', function () {
		var todos = [];

		var storage  = {

			list : function(){
				return todos;
			},

			add : function(todo){
				return todos.push(todo)
			},

			get  : function(index){
				return todos[index];
			},

			remove : function(index){
				return todos.splice(index, 1);
			},

			update : function(index, todo){
				todos.splice(index, 1);
				return todos.push(todo);
			}

		}

		return storage;
	});
