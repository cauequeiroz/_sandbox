var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	console.log('============================');
	console.log('');
	console.log('Start development...');
	console.log('');
	console.log('============================');
});

gulp.task('styles', function() {
	console.log('1. Compile Sass files...');

	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
});