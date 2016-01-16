(function() {
	angular
		.module('app', [
			'ui.router',
			'ngMaterial',

			'app.controller.home',
			'app.controller.addpost',
			'app.controller.toolbar',
		])
		.config(['$locationProvider','$stateProvider','$urlRouterProvider', Config]);

	function Config($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(false);

		$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'partials/home.html',
					controller: 'HomeController',
					controllerAs: 'home'
				})
				.state('addpost', {
					url: '/addpost',
					templateUrl: 'partials/addpost.html',
					controller: 'AddpostController',
					controllerAs: 'addpost'
				});

		$urlRouterProvider
				.otherwise('/');
	}
})();
