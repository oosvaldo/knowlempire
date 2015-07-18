var gulp 	= require('gulp')
var stylus 	= require('gulp-stylus')
var mincss 	= require('gulp-minify-css')
var uglify 	= require('gulp-uglify')
var babel 	= require('gulp-babel')
var jade 	= require('gulp-jade')
var minhtml	= require('gulp-minify-html')
var cntcss 	= require('gulp-concat-css')
var concat 	= require('gulp-concat')
var browserify = require('gulp-browserify')

var jss 	= 'app/app.js'
var htmls 	= 'app/index.jade'
var csss 	= ['app/**/*.styl', 'app.styl']

gulp.task('html', function() {
	return genHtml()
});

gulp.task('watch-html', function() {
	genJs()
	return gulp.watch(htmls, ['html'])
});

// JS TASKS
gulp.task('js', function() {
	return genJs()
});

gulp.task('watch-js', function() {
	genJs()
	return gulp.watch(jss, ['js'])
});

// CSS TASKS
gulp.task('css', function() {
	return genCss()
});

gulp.task('watch-css', function() {
	genCss()
	return gulp.watch(csss, ['css'])
});

// GENERAL TASKS 
gulp.task('update', ['js', 'css', 'html'])
gulp.task('watch', ['watch-css', 'watch-js', 'watch-html'])

function genHtml() {
	return gulp.src(htmls)
	.pipe(concat('index.html'))
	.pipe(jade())
	//.pipe(minhtml())
	.pipe(gulp.dest('public/'))
}

function genJs() {
	return gulp.src(jss)
	.pipe(concat('app.js'))
	.pipe(browserify())
	.pipe(babel())
	//.pipe(uglify())
	.pipe(gulp.dest('public/'))
}

function genCss() {
	return gulp.src(csss)
	.pipe(stylus())
	.pipe(cntcss('app.css'))
	//.pipe(mincss())
	.pipe(gulp.dest('public/'))
}