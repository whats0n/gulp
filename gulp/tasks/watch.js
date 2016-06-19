var config = require('../config'),
	gulp = require('gulp'),
	browserSync = require('browser-sync').create();

// watch
gulp.task('watch', function () {
	gulp.watch([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'], ['css']);
	gulp.watch(config.src.img + '**/*.*', ['copy']);
	gulp.watch(config.src.fonts + '*.*', ['copy']);
	gulp.watch(config.src.js + '**/*.js', ['js']);
	gulp.watch(config.src.svg + '*.svg', ['iconfont']);
	gulp.watch(config.src.icons + '*.png', ['sprite']);
	gulp.watch(config.src.svg + '*.svg', ['svg-sprite']);

	gulp.watch([
		config.src.root + 'templates/**/_*.html',
		config.src.root + 'templates/**/[^_]*.html'
	], ['nunjucks']);
});

// default
gulp.task('default', ['css', 'js', 'nunjucks', 'sprite', 'svg-sprite', 'iconfont', 'server', 'copy', 'watch']);