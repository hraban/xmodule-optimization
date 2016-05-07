var browserify = require('browserify');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');

gulp.task('default', ['typescript'], function () {
    var b = browserify({
        debug: true,
        paths: ['./build'],
    }).require("./build/main.js", {expose: "myapp"});

    b.bundle()
        .pipe(source('myapp.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/js/'));
});

gulp.task('typescript', function () {
    return gulp.src(['src/*.ts', 'src/*.js'])
        .pipe(sourcemaps.init())
        .pipe(typescript({
            declarationFiles: false,
            module: "commonjs",
            sortOutput: true,
            target: 'ES6',
        })).js
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/'));
});