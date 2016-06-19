var config = require('../config'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

gulp.task('copy', function() {
	gulp.src(config.src.img + '**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest(config.build.img));

	gulp.src(config.src.fonts + '*.*')
		.pipe(gulp.dest(config.build.fonts));

	gulp.src(config.src.video + '*.*')
		.pipe(gulp.dest(config.build.video));
});