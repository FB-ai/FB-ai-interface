// Node core modules
var path = require('path');

// Import modules
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var jscs = require('gulp-jscs');

// Import config
var config = require('./_config');

// Html module
module.exports = function(gulp, livereload) {
	gulp.task('scripts', function(){
		return gulp.src(config.scripts)
			.pipe(jscs({
				fix: false,
				configPath: path.join(__dirname, '..', '/.jscsrc')
			}))
			.pipe(jscs.reporter())
			.pipe(babel())
			.pipe(ngAnnotate())
			.pipe(concat('app.js'))
			.pipe(gulp.dest('dist/js'))
			.pipe(livereload());
	});
};
