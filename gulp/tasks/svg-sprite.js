var config = require('../config'),
	gulp = require('gulp'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	rename = require('gulp-rename'),
	cheerio = require('gulp-cheerio'),
	path = require('path');

gulp.task('svg-sprite', function () {
	return gulp
		.src(config.src.svg + '*.svg')
		.pipe(rename({prefix: 'svg-'}))
		.pipe(cheerio({
	        run: function ($) {
	            $('[fill]').removeAttr('fill');
	        },
	        parserOptions: { xmlMode: true }
	    }))
		.pipe(svgmin(function () {
			return {
				plugins: [{
					cleanupIDs: {
						minify: true
					}
				}]
			}
		}))
		.pipe(svgstore())
		.pipe(gulp.dest(config.build.img));
});