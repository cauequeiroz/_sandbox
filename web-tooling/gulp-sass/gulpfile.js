var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

sync.init({
	server: './'
});


gulp.task('default', ['styles'], function() {
	console.log('============================');
	console.log('');
	console.log('Start development...');
	console.log('');
	console.log('============================');

	sync.stream();

	gulp.watch('sass/**/*.scss', ['styles']);

});

gulp.task('styles', function() {
	console.log('1. Compile Sass files...');

	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));

	sync.reload();
});