'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('js', function() {
  var config = require('./webpack.config.js');
  return webpack(config).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    };
  });
});

gulp.task('css', function() {
  return gulp.src('./client/src/css/*.*')
    .pipe(gulp.dest('./client/public/'));
});

gulp.task('vendor', function() {
  return gulp.src('./client/src/vendor/**/*.*')
    .pipe(gulp.dest('./client/public/vendor/'));
});

gulp.task('html', function() {
  return gulp.src('./client/src/index.html')
    .pipe(gulp.dest('./client/'));
});

gulp.task('build', ['html', 'vendor', 'css', 'js']);
