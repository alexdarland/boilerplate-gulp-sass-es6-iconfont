"use strict"

const gulpConfig   = require('../gulp-config')
const gulpUtils    = require('../gulp-utils')
const gulpSequence = require('gulp-sequence')

const src = [
    `${gulpConfig.srcFolder}/*.html`,
    `${gulpConfig.fontsSrcFolder}/**/*`,
    `${gulpConfig.uiImgSrcFolder}/**/*`,
    `!${gulpConfig.uiImgSrcFolder}/{svg,svg/**}`
]

module.exports = (gulp) => {

    gulp.task('copy:assets', () => {
        return gulp.src(src, { base: gulpConfig.srcFolder }).pipe(gulp.dest(gulpConfig.distFolder));
    });

    gulp.task('copy:watch', () => {
        gulp.watch(src, (event) => {
            gulpUtils.logWatchEvent(event)
            gulpSequence('clean:assets', 'copy:assets')(gulpUtils.mapError)
        })
    });

};
