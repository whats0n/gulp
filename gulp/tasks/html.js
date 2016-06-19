var config = require('../config'),
	gulp = require('gulp'),
	nunjucksRender = require('gulp-nunjucks-render'),
	frontMatter = require('gulp-front-matter'),
	prettify = require('gulp-prettify');

gulp.task('nunjucks', function() {
	nunjucksRender.nunjucks.configure([
		config.src.root + 'templates'
	], {
		watch: false,
		trimBlocks: true,
		lstripBlocks: false
	});

	return gulp
		.src([config.src.root + 'templates/**/[^_]*.html'])
		.pipe(frontMatter({ property: 'data' }))
		.pipe(nunjucksRender({
			path: [config.src.root + 'templates/']
		}))
		.pipe(prettify({
			indent_size: 2,
			wrap_attributes: 'auto', 
			preserve_newlines: true,
			end_with_newline: true
		}))
		.pipe(gulp.dest(config.build.root));
});