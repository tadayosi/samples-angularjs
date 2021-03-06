var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', () => {
  gulp.src('.')
    .pipe(webserver({
      port: 8000,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['webserver']);
