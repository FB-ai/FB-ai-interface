(function() {
	angular
		.module('service.auth', [])
		.service('Auth', function($http, $q) {
			var basePath = 'http://dumbass.ngrok.com';

			return {
				// Verify if your logged in by getting your user data
				user: function() {
					var userApi = basePath + '/user';
					var deferred = $q.defer();

					$http({method: 'GET', url: userApi})
						.success(function(data) {
							deferred.resolve(data);
						})
						.error(function(data, status) {
							deferred.reject(data, status);
						});

					return deferred.promise;
				},
				// Starts a new session (LOGIN)
				sessionStart: function() {
					var startApi = basePath + '/session/start';
					var deferred = $q.defer();

					$http({method: 'GET', url: startApi})
						.success(function(data) {
							deferred.resolve(data);
						})
						.error(function(data, status) {
							deferred.reject(data, status);
						});

					return deferred.promise;
				},
				// Refreshs your session and hands you a new token
				sessionRefresh: function(obj) {
					var refreshApi = basePath + '/session/refresh';
					var deferred = $q.defer();

					$http({method: 'GET', url: refreshApi})
						.success(function(data) {
							deferred.resolve(data);
						})
						.error(function(data, status) {
							deferred.reject(data, status);
						});

					return deferred.promise;
				},
				// Remove token and closes the session (LOGOUT)
				sessionLogout: function(obj) {
					var logoutApi = basePath + '/session/logout';
					var deferred = $q.defer();

					$http({method: 'GET', url: logoutApi})
						.success(function(data) {
							deferred.resolve(data);
						})
						.error(function(data, status) {
							deferred.reject(data, status);
						});

					return deferred.promise;
				}
			};
		});
})();
