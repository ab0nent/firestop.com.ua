'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const mincss = require("gulp-minify-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

//in command line "set NODE_ENV=prod" or "set NODE_ENV=dev"
const  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'prod'
        }
    });
    browserSync.watch('prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('dev/sass/**/*.scss')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dev/css'))
});

gulp.task('html', function () {
    return gulp.src('dev/*.html', {since: gulp.lastRun('html')})
        .pipe(gulp.dest('prod'))
});

gulp.task('json', function () {
    return gulp.src('dev/json/**/*.*', {since: gulp.lastRun('json')})
        .pipe(gulp.dest('prod/json'))
});

gulp.task('js', function () {
    return gulp.src('dev/js/**/*.js')
        .pipe(gulpIf(['_*.js'], concat('main.min.js')))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulpIf(!isDevelopment,uglify()))
        .pipe(gulp.dest('prod/js'))
});

gulp.task('img', function () {
    return gulp.src('dev/img/**/*.*', {since: gulp.lastRun('img')})
        .pipe(gulp.dest('prod/img'))
});

gulp.task('css', function () {
    return gulp.src('dev/css/**/*.*', {since: gulp.lastRun('css')})
        .pipe(gulpIf(!isDevelopment,mincss()))
        .pipe(gulp.dest('prod/css'))
});

gulp.task('app', function () {
    return gulp.src('dev/app/**/*.*', {since: gulp.lastRun('app')})
        .pipe(gulp.dest('prod/app'))
});

gulp.task('clean', function () {
    return del('prod');
});

gulp.task('watch', function () {
    gulp.watch('dev/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('dev/*.html', gulp.series('html'));
    gulp.watch('dev/json/**/*.json', gulp.series('json'));
    gulp.watch('dev/img/**/*.*', gulp.series('img'));
    gulp.watch('dev/js/**/*.*', gulp.series('js'));
    gulp.watch('dev/css/**/*.*', gulp.series('css'));
    gulp.watch('dev/app/**/*.*', gulp.series('app'));
});

gulp.task('build', gulp.series('clean',
    gulp.parallel('sass', 'html', 'json', 'img', 'js', 'app'),
    gulp.parallel('css', 'browserSync', 'watch')));

gulp.task('default', gulp.series('build'));