const gulp = require( 'gulp' )
const shell = require( 'gulp-shell' )
const path = require( 'path' );

gulp.task( 'default', () => {
  return gulp.src( [ 'src/**/*.js', '!src/**/*.test.js' ], { read: false } )
    .pipe( shell( [
      "rollup <%= file.path %> --file <%= file.path.replace('src','lib') %> -f cjs -c -m",
    ] ) )
} )