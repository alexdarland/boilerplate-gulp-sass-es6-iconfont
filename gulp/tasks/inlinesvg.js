"use strict"

const path 		   = require('path')
const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')
const rename       = require('gulp-rename')
const svgstore     = require('gulp-svgstore')
const svgmin 	   = require('gulp-svgmin')
const gulpUtils    = require('../gulp-utils')
const gulpConfig   = require('../gulp-config')
const replace 	   = require('gulp-replace');

const src          = `${gulpConfig.iconsSrcFolder}/**/*.svg`

module.exports = (gulp) => {

    gulp.task('inlinesvg:main', function () {
        return gulp
            .src(src)
			.pipe(svgmin())
			.pipe(rename({prefix: 'icon-'}))
            .pipe(svgstore({ inlineSvg: true }))
			.pipe(replace('<svg xmlns="http://www.w3.org/2000/svg">', '<svg style="height:0;width:0;display:block;" xmlns="http://www.w3.org/2000/svg">'))
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
