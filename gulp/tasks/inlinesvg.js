"use strict"

const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')
const rename       = require('gulp-rename')
const svgstore     = require('gulp-svgstore')
const gulpUtils    = require('../gulp-utils')
const gulpConfig   = require('../gulp-config')

const src          = `${gulpConfig.iconsSrcFolder}**/*.svg`

module.exports = (gulp) => {

    gulp.task('inlinesvg:main', function () {
        return gulp
            .src(src)
            .pipe(svgstore({ inlineSvg: true }))
            .pipe(rename(gulpConfig.iconsFileName))
            .pipe(gulp.dest(gulpConfig.iconsDistFolder));
    });

    gulp.task('inlinesvg:watch', () => {
        gulp.watch(src, (event) => {
            gulpUtils.logWatchEvent(event)
            gulpSequence('clean:inlinesvg', 'inlinesvg:main')(gulpUtils.mapError)
        })
    });

};