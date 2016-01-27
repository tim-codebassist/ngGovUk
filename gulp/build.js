'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var gutil       = require('gulp-util');

// create standalone build
module.exports = function () {
  gulp.task('build', ['clean-dev'], function (cb) {
    runSequence([
      'build-css',
      'copy-assets',
      'build-js'
    ], 'move-to-docs', cb);
  });
};