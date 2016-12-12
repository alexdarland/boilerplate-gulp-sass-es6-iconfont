"use strict"

const gulpConfig = require('../gulp-config')
const path       = require('path')
const del        = require('del')

module.exports = (gulp) => {

    gulp.task('clean:all', () => {
        return del([gulpConfig.distFolder, path.join(gulpConfig.iconsDistFolder, gulpConfig.iconsFileName)])
    });

    gulp.task('clean:scripts', () => {
        return del([gulpConfig.scriptsDistFolder]);
    });

    gulp.task('clean:sass', () => {
        return del([gulpConfig.sassDistFolder]);
    });

    gulp.task('clean:assets', () => {
        return del([gulpConfig.imgDistFolder, gulpConfig.fontsDistFolder]);
    });

    gulp.task('clean:inlinesvg', () => {
        return del([path.join(gulpConfig.iconsDistFolder, gulpConfig.iconsFileName)]);
    });

};