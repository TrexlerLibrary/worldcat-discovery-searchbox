var gulp = require('gulp')
var less = require('gulp-less')
var rename = require('gulp-rename')
var path = require('path')

var lessOpts = {
  paths: [path.join(__dirname, 'less', 'includes')]
}

gulp.task('lessify', function () {
  gulp.src('./less/main.less')
      .pipe(less(lessOpts))
      .pipe(rename(function(f) {f.basename = 'beetbox'}))
      .pipe(gulp.dest('./css'))
})

gulp.task('watch', function () {
  gulp.watch('./less/*', ['lessify'])
})

gulp.task('build', ['watch'])
gulp.task('default', ['build'])
