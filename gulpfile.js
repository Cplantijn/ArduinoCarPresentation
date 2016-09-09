'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('./styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', [ 'styles' ]);
});
