"use strict"

const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')
const iconFont     = require('gulp-iconfont')
const iconFontCss  = require('gulp-iconfont-css')
const pkg          = require('../../package.json')
const gulpUtils    = require('../gulp-utils')
const gulpConfig   = require('../gulp-config')

const fontName     = `${pkg.name}-icons`;
const src          = `${gulpConfig.iconsSrcFolder}**/*.svg`

module.exports = (gulp) => {

    gulp.task('iconfont:main', () => {
        return gulp.src(src)
            .pipe(iconFontCss({
                fontName: fontName,
                path: 'gulp/templates/_icon-template.scss',
                targetPath: gulpConfig.iconsSassDistFolder + '_icons.scss',
                fontPath: gulpConfig.iconsRelativeDistFolder
            }))
            .pipe(iconFont({
                fontName: fontName,
                prependUnicode: true,
                normalize:true,
                formats: ['ttf', 'eot', 'woff', 'woff2'],
            }))
            .pipe(gulp.dest(gulpConfig.iconsFontDistFolder));
    });

    /*gulp.task('iconfont:watch', () => {
        gulp.watch(src, (event) => {
            gulpUtils.logWatchEvent(event)
            gulpSequence('clean:iconFont', 'sass:main')(gulpUtils.mapError)
        })
    });*/

};