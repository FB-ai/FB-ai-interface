(function() {
	angular
		.module('app.controller.addpost', [])
		.controller('AddpostController', AddpostController);

	// Dont use the injects this gets sorted out by ng-annotate
	function AddpostController($scope) {
		var addpost = this;
		date = new Date();
		// addpost is the object available to the view
		angular.extend(addpost, {
			title: null,
			contents: null,
			test_data: [{title: "This is my first post", content: "Here you will se a resume of the content", date: date},
			{title: "Second post about NYC marathon", content: "The runners perfomed quite well at the marathon. Some did the distance in less than 5 minutes... Truly amazing.", date: date},
		]
		});
		$scope.sendPost = function () {
			if (addpost.title) {
				date = new Date();
				console.log("Hej")
		    addpost.test_data.push({title: addpost.title, content: addpost.contents, date: date})
				// Some $http here
				// if success do following:
				addpost.title = null;
				addpost.contents = null;
			} else {
			// items is still null
			}

		};
	}
})();
