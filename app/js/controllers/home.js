(function() {
	angular
		.module('app.controller.home', [])
		.controller('HomeController', HomeController);

	// Dont use the injects this gets sorted out by ng-annotate
	function HomeController($scope) {
		var home = this;

		// home is the object available to the view
		angular.extend(home, {
			title: 'This is our starts controller',
			description: 'hejsa'
		});
	}
})();
