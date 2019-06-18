(function() {
	angular
		.module('app.controller.home', [])
		.controller('HomeController', HomeController);

	function HomeController($scope, $window, Auth) {
		var home = this;

		angular.extend(home, {
			title: 'FB-ai',
			login,
		});

		function login() {
			console.log('login clicked');
			Auth.sessionStart()
				.then(function(data) {
					// Success
					var regex = /.​*href="(.*)"/g;
					var matches = regex.exec(data);
					var url = matches[1];

					$window.location.href = url;
				}, function(err, status) {
					// Error
				})
		}
	}
})();
