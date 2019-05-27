'use strict';

const dir = {
    src: './src/',
    build: './build/' 
};

const { task, series, parallel, src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const del = require('del');

task('compileStyles', () => {
    return src(dir.src + 'scss/style.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err.message);
            this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('/'))
    .pipe(dest(dir.build + 'css/'));
});

task('clean', () => {
    return del(dir.build);
});

task('default', series('clean', 'compileStyles'));
