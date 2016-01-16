(function () {
    // Don't apply strict its getting
    // applied by the babel es6 transpiler

    angular.module('app', ['ui.router', 'app.controller.start']).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', Config]);

    function Config($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider.state('start', {
            url: '/',
            templateUrl: 'partials/start.html',
            controller: 'StartController',
            controllerAs: 'start'
        });

        $urlRouterProvider.otherwise('/');
    }
})();
(function () {
	// Don't apply strict its getting applied by the babel es6 transpiler

	angular.module('app.controller.start', []).controller('StartController', StartController);

	// Dont use the injects this gets sorted out by ng-annotate

	function StartController($scope) {

		var start = this;

		// start is the object available to the view
		angular.extend(start, {
			title: 'This is our starts controller'
		});
	}
	StartController.$inject = ["$scope"];
})();