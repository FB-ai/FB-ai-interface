// Include gulp
var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');

// Get/set variables
var config = require('./gulp/_config');
var bumpType = [argv.bump] || ['build'];
var port = argv.p || 8000;

/**
 *	Import modularized tasks
 */

// Imports Copy (copy assets and html)
require('./gulp/copy')(gulp, livereload);

// Imports Sass
require('./gulp/sass')(gulp, livereload);

// Imports Scripts
require('./gulp/scripts')(gulp, livereload);
require('./gulp/libs')(gulp, livereload);

// Imports Bump
require('./gulp/bump')(gulp, bumpType);

// Imports Bump
require('./gulp/manifest')(gulp, livereload);

///
///  Setup group tasks
///	
	
// Creates a default build task
gulp.task('default', function(cb) {
	runSequence(['sass', 'libs', 'scripts', 'html', 'assets', 'manifest'], cb);
});

// Creates a default build task
gulp.task('deploy', function(cb) {
	runSequence(['sass', 'libs', 'scripts', 'html--deploy', 'assets', 'manifest'], 'clean-html-tmp', cb);
});

// Creates a release build task (adds a version bump)
gulp.task('release', function(cb) {
	runSequence(['deploy', 'bump'], cb);
});

// Creates a watch task to watch files and build async
gulp.task('watch', ['default'], function () {
	gulp.watch(config.sass, ['sass']);
	gulp.watch(config.libs, ['libs']);
	gulp.watch(config.scripts, ['scripts']);
	gulp.watch(config.html, ['html', 'clean-html-tmp']);
	gulp.watch(config.assets, ['assets']);
});
