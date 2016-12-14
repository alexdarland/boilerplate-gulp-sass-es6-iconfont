"use strict"

const gulp         = require('gulp')
const rename       = require('gulp-rename')
const sass         = require('gulp-sass')
const sourcemaps   = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const gulpConfig   = require('../gulp-config')
const gulpUtils    = require('../gulp-utils')
const gulpSequence = require('gulp-sequence')

const mainEntry = `${gulpConfig.sassSrcFolder}/main.scss`
const src       = `${gulpConfig.sassSrcFolder}/**/*.scss`

module.exports = (gulp) => {

    gulp.task('sass:main', () => {
        return gulp
            .src(mainEntry)
            .pipe(gulpUtils.isDevelopment(sourcemaps.init()))
            .pipe(sass({ outputStyle: 'compressed' }))
            .on('error', gulpUtils.mapError)
            .pipe(gulpUtils.isDevelopment(sourcemaps.write(undefined, { sourceRoot: null })))
            .pipe(autoprefixer({ browsers: gulpConfig.browserList }))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(gulpConfig.sassDistFolder))
            .resume();
    });

    gulp.task('sass:watch', () => {
        gulp.watch(src, (event) => {
            gulpUtils.logWatchEvent(event)
            gulpSequence('clean:sass', 'sass:main')(gulpUtils.mapError)
        })
    });

};
