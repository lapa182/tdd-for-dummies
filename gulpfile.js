var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('webserver', function() {
  connect.server({
    root: 'client-side',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./client-side/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('./client-side/styles/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./client-side/styles'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./client-side/styles/**/*.scss', ['sass']);
    gulp.watch(['./client-side/*.html'], ['html']);
})

gulp.task('serve', ['sass', 'webserver', 'watch']);
