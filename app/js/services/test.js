(function() {
	angular
		.module('service.test', [])
		.service('Test', function($http, $q) {
			var apiPath = '/api';
			var results = [];

			return {
				get: function() {
					var deferred = $q.defer();
					if (results.length === 0) {
						$http({method: 'GET', url: apiPath}).success(function(data) {
							results = data;
							deferred.resolve(data);
						}).error(function(data, status) {
							deferred.reject(data, status);
						});
					} else {
						deferred.resolve(results);
					}
					return deferred.promise;
				}
			};
		});
})();
