// Import config
var config = require('./_config');
var clean = require('gulp-clean');

// Html module
module.exports = function(gulp, livereload){
	gulp.task('html', function(){
		return gulp.src(config.html)
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
	gulp.task('html--deploy', function(){
		return gulp.src(config.html)
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
	gulp.task('assets', function(){
		return gulp.src(config.assets)
			.pipe(gulp.dest('dist/assets'))
			.pipe(livereload());
	});
	gulp.task('clean-html-tmp', function () {
		return gulp.src('dist/tmp-**', {read: false})
			.pipe(clean())
			.pipe(livereload());
	}); 
};
