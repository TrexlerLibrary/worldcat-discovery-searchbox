var gulp = require('gulp')
var path = require('path')

var less = require('gulp-less')
var rename = require('gulp-rename')
var minifyCss = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')

gulp.task('lessify', function () {
  gulp.src('./less/main.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(rename(function(f) {f.basename = 'beetbox'}))
      .pipe(gulp.dest('./css'))
})

gulp.task('minify', function () {
  gulp.src('./css/beetbox.css')
      .pipe(minifyCss())
      .pipe(rename(function(f) {f.basename += '.min'}))
      .pipe(gulp.dest('./css'))
})

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', ['lessify'])
})

gulp.task('build', ['lessify', 'minify'])
gulp.task('default', ['build'])
