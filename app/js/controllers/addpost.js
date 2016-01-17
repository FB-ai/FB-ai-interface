(function() {
	angular
		.module('app.controller.addpost', [])
		.controller('AddpostController', AddpostController);

	/**
	 *	Dont use the injects this gets sorted out by ng-annotate
	 */
	function AddpostController($scope, isLoggedin, Posts) {
		var addpost = this;

		/**
		 *	addpost is the object available to the view
		 */
		angular.extend(addpost, {
			postObj: {
				title: '',
				contents: 'adadad #heje #hdhad',
				hashtags: ''
			},
			sendPost,
			posts: [],
		});

		// Get posts
		Posts.get().then(function(posts) {
			addpost.posts = posts;
		});

		function sendPost() {
			if (addpost.postObj.title) {
				date = new Date();

				addpost.posts.push(addpost.postObj);

				// Some $http here
				// if success do following:
				resetPostView();
			} else {
				// items is still null
			}
		}

		function resetPostView() {
			angular.extend(addpost.postObj, {
				title: '',
				contents: '',
				hashtags: ''
			});
		}

		/**
		 *	Here we match hashtags by regex and store them
		 */
		// addpost.hashtags = getHashtags();

		// function getHashtags() {
		// 	return addpost.contents.match(/#\S+/g);
		// }
	}
})();
