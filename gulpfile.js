'use strict';

const dir = {
    src: './src/',
    public: './public/',
    build: './build/' 
};

const { task, series, parallel, src, dest, watch } = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
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

task('copySVG', () => {
    return src(dir.public + 'img/*.svg')
    .pipe(dest(dir.build + 'img/'));
});

task('copyFonts', () => {
    return src(dir.public + 'fonts/*.{woff2,woff}')
    .pipe(dest(dir.build + 'fonts/'));
});

task('copyHTML', () => {
    return src(dir.public + '*.{html,png}')
    .pipe(dest(dir.build));
});

task('clean', () => {
    return del(dir.build);
});

task('watch', () => {
    watch(dir.src + '**/*.scss', series('compileStyles'));
    watch(dir.src + '**/*.{ts,tsx}', series('compileScripts'));
    watch(dir.public + 'img/*.svg', series('copySVG'));
    watch(dir.public + 'fonts/*.{woff2,woff}', series('copyFonts'));
    watch(dir.public + '*.{html,png}', series('copyHTML'));
});

task('serve', () => {
    browserSync.init({
		server: dir.build
	});
	browserSync.watch(dir.build + '**/*.*').on('change', browserSync.reload);
});

task('build', series('clean', parallel('compileStyles', 'compileScripts', 'copySVG', 'copyFonts', 'copyHTML')));

task('dev', series('build', parallel('serve', 'watch')));
