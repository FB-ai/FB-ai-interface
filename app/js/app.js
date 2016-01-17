(function() {
	angular
		.module('app', [
			'ui.router',
			'ngMaterial',

			'app.controller.home',
			'app.controller.addpost',
			'app.controller.toolbar',
		])
		.config(['$locationProvider','$stateProvider','$urlRouterProvider', Config])
		.config(function($mdThemingProvider) {
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
		    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
		    '200', '300', '400', 'A100'],
		    'contrastLightColors': undefined    // could also specify this if default was 'dark'
		  });
		  $mdThemingProvider.theme('default')
		  .primaryPalette('fb-ai-palette')
		});

	function Config($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

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
