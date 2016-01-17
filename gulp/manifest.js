// Import modules
var config = require('./_config');
var manifest = require('gulp-appcache');

// Takana module
module.exports = function(gulp){
	gulp.task('manifest', function(){
		return gulp.src(config.manifest.watch, { base: './dist/' })
			.pipe(manifest({
				hash: true,
				preferOnline: true,
				network: ['http://*', 'https://*', '*'],
				filename: 'app.manifest',
				exclude: config.manifest.exclude
			}))
			.pipe(gulp.dest(config.manifest.dist));
	});
};
