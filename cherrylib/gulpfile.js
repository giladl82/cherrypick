const gulp = require('gulp');
const shell = require('gulp-shell');
const watch = require('gulp-watch');

const globs = ['src/**/*.js', '!src/**/*.test.js'];
const shellCmd = ["rollup <%= file.path %> --file <%= file.path.replace('src','lib') %> -f cjs -c -m"];

gulp.task('build', () => {
  return gulp
    .src(globs, { read: false })
    .pipe(shell(shellCmd));

});

gulp.task('watch', ['build'], () => {
  return gulp.src(globs)
    .pipe(watch(globs))
    .pipe(shell(shellCmd));
});



gulp.task('default', ['build']);

