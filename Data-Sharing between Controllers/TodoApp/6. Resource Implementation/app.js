/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngResource']).config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
});
