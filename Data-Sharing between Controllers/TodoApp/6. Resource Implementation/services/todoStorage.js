/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('todomvc')
	.factory('todoStorage', function ($resource) {
		var rest_end_point = 'http://127.0.0.1:8000/api/v1';
		var todos = [];

		var storage  = {

			todos : function(params){
				return $resource(rest_end_point+'/todos', {}, {
					get : {method : 'GET', isArray:false},
					post: {method : 'POST', params:params},
				} )
			},

			todo : function(urlParams, params){
				return $resource(rest_end_point+'/todos/:id', urlParams, {
					get : {method : 'GET', isArray:false},
					patch: {method : 'PATCH', params:params}

				} )
			}
		}

		return storage;
	});
