'use strict';

const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');

gulp.task('clean', function () {
    return del('./dist');
});

gulp.task('api', function() {
  return gulp.src('./api/**/*.*')
    .pipe(gulp.dest('./dist/api'));
});

gulp.task('lib', function() {
  return gulp.src('./lib/**/*.*')
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('config', function() {
  return gulp.src('./config.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('mongodb', function() {
  return gulp.src('./mongodb.yaml')
    .pipe(gulp.dest('./dist'));
});

gulp.task('package', function() {
  return gulp.src('./package.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('run', function() {
  return gulp.src('./run.sh')
    .pipe(gulp.dest('./dist'));
});

gulp.task('prepare', function() {
  return gulp.src('./prepare.sh')
    .pipe(gulp.dest('./dist'));
});

gulp.task('start', function() {
  return gulp.src('./start')
    .pipe(gulp.dest('./dist'));
});

gulp.task('server', gulp.parallel('api', 'lib', 'config', 'mongodb', 'package', 'run', 'prepare', 'start'));

gulp.task('js', function(done) {
  var config = require('./webpack.config.js');
  return webpack(config).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    };
    done();
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

gulp.task('client', gulp.series(gulp.parallel('html', 'vendor', 'css', 'js'), function() {
  return gulp.src(['./client/**/*.*', '!./client/src/**/*.*'])
    .pipe(gulp.dest('./dist/client'));
}));

gulp.task('build', gulp.series('clean', 'client', 'server'));
