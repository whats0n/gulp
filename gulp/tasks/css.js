var config = require('../config'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename');

gulp.task('css', function () {
	return gulp.src([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'])
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions', ],
		cascade: false
	}))
	.pipe(minifyCSS())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest(config.build.css));
});