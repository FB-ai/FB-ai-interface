(function() {
	const modules = [
		'ui.router',
		'ngMaterial',

		'app.controller.home',
		'app.controller.addpost',
		'app.controller.toolbar',

		'service.posts',
		'service.auth',
	];

	angular
		.module('app', modules)
		.config(Config);

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
		$mdThemingProvider.definePalette('fb-ai-palette', {
			'50': '#8fa4cf',
			'100': '#7e96c7',
			'200': '#6c87c0',
			'300': '#5a79b8',
			'400': '#4b6bae',
			'500': '#43609c',
			'600': '#3b558a',
			'700': '#344a78',
			'800': '#2c3f66',
			'900': '#243455',
			'A100': '#a1b3d7',
			'A200': '#b3c1de',
			'A400': '#c5d0e6',
			'A700': '#1d2943',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': [
					'50',
					'100',
					'200',
					'300',
					'400',
					'A100'
			],
			'contrastLightColors': undefined
		});

		$mdThemingProvider.theme('default')
			.primaryPalette('fb-ai-palette')
	}

	/*
	 * Check if your loggedin
	 * if you are return the user, otherwise return to the home state
	 */
	function checkLoggedin($q, $http, $state) {
		var deferred = $q.defer();

		$http.get('http://dumbass.ngrok.com/user')
			.success(function(user) {
				deferred.resolve(user);
			})
			.error(function(data, status) {
				deferred.reject();
				$state.go('home');
			});

		return deferred.promise;
	}
})();
