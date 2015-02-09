var gulp = require('gulp');
var react = require('gulp-react');
var concat = require("gulp-concat");
var source = require('vinyl-source-stream');
var series =  require('stream-series');
var uglify = require("gulp-uglify");
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('clean', function(cb) {
  // rimraf('./dist', cb);
  del(['./dist'], {force: true}, cb);
});

gulp.task('releaseScripts', function () {
  var vendor = gulp.src('node_modules/react/dist/react.min.js');

  // Compile all the React templates into a components bundle
  var components = gulp.src('app/js/components/**/*.jsx')
    .pipe(react())
    .pipe(uglify())
    .pipe(concat('components.js'));

  var app = gulp.src('app/js/app.jsx')
    .pipe(react())
    .pipe(uglify())
    .pipe(concat('app.js'));  

  series(vendor, components, app)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('releaseCss', function() {
  gulp.src(['node_modules/normalize-css/normalize.css', 'app/css/*.css'])
    .pipe(concat('app.min.css'))
    .pipe(minifyCss({keepBreaks: true}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copyAssets', function() {
  gulp.src(['app/favicon.*', 'app/images/*.*', 'app/*.html'], {base: 'app'})
    .pipe(gulp.dest('./dist'));
});


// gulp.task('browserify', function() {
//   return browserify('./src/javascript/app.js')
//     .bundle()
//     //Pass desired output filename to vinyl-source-stream
//     .pipe(source('bundle.js'))
//     // Start piping stream to tasks!
//     .pipe(gulp.dest('./build/'));
// });


gulp.task('build', function(callback) {
  runSequence('clean', ['copyAssets', 'releaseCss', 'releaseScripts'], callback);
});