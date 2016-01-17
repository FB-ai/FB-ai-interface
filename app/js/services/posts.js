(function() {
	angular
		.module('service.posts', [])
		.service('Posts', function($http, $q) {
			var date = new Date();
			var apiPath = '/posts';
			var results = [
				{
					title: 'This is my first post',
					content: 'Here you will se a resume of the content',
					date: date
				},
				{
					title: 'Second post about NYC marathon',
					content: 'The runners perfomed quite well at the marathon. Some did the distance in less than 5 minutes... Truly amazing.',
					date: date
				}
			];

			return {
				get: function() {
					var deferred = $q.defer();

					if (results.length === 0) {
						$http({method: 'GET', url: apiPath})
							.success(function(data) {
								results = data;
								deferred.resolve(data);
							})
							.error(function(data, status) {
								deferred.reject(data, status);
							});
					} else {
						deferred.resolve(results);
					}

					return deferred.promise;
				},
				post: function(obj) {
					var deferred = $q.defer();

					$http({method: 'POST', url: apiPath})
						.success(function(data) {
							results = data;
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
