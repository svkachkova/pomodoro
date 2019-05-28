'use strict';

const dir = {
    src: './src/',
    build: './build/' 
};

const { task, series, parallel, src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const ts = require("gulp-typescript");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
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

task('compileScripts', () => {
    return browserify({
        entries: dir.src + 'ts/index.ts',
        debug: true,
    })
    .plugin(tsify, dir.src + "ts/tsconfig.json")
    .bundle()
    .pipe(source('index.js'))
    .pipe(dest(dir.build + 'js/'));
});

task('clean', () => {
    return del(dir.build);
});

task('default', series('clean', parallel('compileStyles', 'compileScripts')));
