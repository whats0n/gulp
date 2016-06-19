var config = require('../config'),
	gulp = require('gulp'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css');

var fontName = 'svgfont';

gulp.task('iconfont', function() {
	gulp.src([config.src.svg + '*.svg'])
		.pipe(iconfontCss({
			fontName: fontName,
			targetPath: '../../src/sass/lib/_icons.scss',
			fontPath: '../fonts/'
		}))
		.pipe(iconfont({
			fontName: fontName,
			appendCodepoints: true,
			formats: ['ttf', 'eot', 'woff', 'woff2'],
			normalize: true,
			fontHeight: 1001,
			fontStyle: 'normal',
			fontWeight: 'normal'
		}))
		.pipe(gulp.dest(config.build.fonts));
});