'use strict';

const dir = {
    src: './src/',
    build: './build/' 
};

const { task, series, parallel, src, dest, watch } = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const browserSync = require('browser-sync').create();

task('compileStyles', () => {
    return src(dir.src + 'scss/style.scss')
    .pipe(plumber({
        errorHandler: err => {
            console.log(err.message);
            this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('/'))
    .pipe(dest(dir.build + 'css/'));
});

task('compileScripts', () => {
    return src(dir.src + 'ts/index.ts')
    .pipe(webpack(webpackConfig))
    .pipe(dest(dir.build + 'js/'));
});

task('copyHTML', () => {
    return src(dir.src + '**/*.{html,ico}')
    .pipe(dest(dir.build));
});

task('clean', () => {
    return del(dir.build);
});

task('watch', () => {
    watch(dir.src + '**/*.scss', series('compileStyles'));
    watch(dir.src + '**/*.ts', series('compileScripts'));
    watch(dir.src + '*.{html,ico}', series('copyHTML'));
});

task('serve', () => {
    browserSync.init({
		server: dir.build
	});
	browserSync.watch(dir.build + '**/*.*').on('change', browserSync.reload);
});

task('build', series('clean', parallel('compileStyles', 'compileScripts', 'copyHTML')));

task('dev', series('build', parallel('serve', 'watch')));
