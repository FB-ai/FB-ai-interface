(function() {
	angular
		.module('app.controller.addpost', [])
		.controller('AddpostController', AddpostController);

	// Dont use the injects this gets sorted out by ng-annotate
	function AddpostController($scope) {
		var addpost = this;

		// addpost is the object available to the view
		angular.extend(addpost, {
			title: 'This is our starts controller'
		});
	}
})();
