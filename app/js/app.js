(function() {
	const modules = [
		'ui.router',
		'ngMaterial',

		'app.controller.home',
		'app.controller.addpost',
		'app.controller.toolbar',
	];

	angular
		.module('app', modules)
		.config(['$locationProvider','$stateProvider','$urlRouterProvider','$mdThemingProvider', Config]);

	function Config($locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
		$locationProvider.html5Mode(true);

		/*
		 * Angular states
		 */
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
					controllerAs: 'addpost',
					resolve: {
						isLoggedin: checkLoggedin
					}
				});

		$urlRouterProvider
				.otherwise('/');

		/*
		 * Angular material theme setup
		 */
		$mdThemingProvider.theme('default')
			.primaryPalette('blue-grey')
			.accentPalette('orange');
	}

	/*
	 * Check if your loggedin
	 * if you are return the user, otherwise return to the home state
	 */
	function checkLoggedin($q, $http, $state) {
		var deferred = $q.defer();

		$http.get('/user')
			.success(function(user) {
				if (user !== '0') {
					deferred.resolve(user);
				} else {
					deferred.reject();
					$state.go('home');
				}
			});

		return deferred.promise;
	}
})();
