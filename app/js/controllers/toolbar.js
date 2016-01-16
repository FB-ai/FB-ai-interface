(function() {
	angular
		.module('app.controller.toolbar', [])
		.controller('ToolbarController', ToolbarController);

	// Dont use the injects this gets sorted out by ng-annotate
	function ToolbarController($scope, $state) {
		var toolbar = this;

		console.log($state);
		// toolbar is the object available to the view
		angular.extend(toolbar, {
			title: 'Intelligent Facebook',
			stateName: $state.current.name,
		});
	}
})();
