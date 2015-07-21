var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var jade  = require('gulp-jade')
var stylus 	= require('gulp-stylus')
var concat  = require('gulp-concat')
var cntcss 	= require('gulp-concat-css')

var jss 	= 'app/app.js'
var htmls   = ['app/header.html','app/map/map.html','app/footer.html']
var csss 	= ['app/**/*.styl', 'app.styl']

 
function compile(watch) {
  var bundler = watchify(browserify(jss, { debug: true }).transform(babel));
 
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/'));
  }
 
  if (watch) {
    bundler.on('update', function() {
      rebundle();
    });
  }

  rebundle();
}

 
function watch() {
  return compile(true);
};

function genHtml() {
  return gulp.src(htmls)
  .pipe(concat('index.html'))
  //.pipe(jade())
  //.pipe(minhtml())
  .pipe(gulp.dest('public/'))
}


function genCss() {
	return gulp.src(csss)
	.pipe(stylus())
	.pipe(cntcss('app.css'))
	.pipe(gulp.dest('public/'))
}

 
gulp.task('js', function() { return compile(false); });
gulp.task('js', function() { return watch(); });
 
 gulp.task('html', function() {
  return genHtml()
 });

gulp.task('update', ['js']);

// CSS TASKS
gulp.task('css', function() {
	return genCss()
});

gulp.task('watch-css', function() {
	genCss()
	return gulp.watch(csss, ['css'])
});