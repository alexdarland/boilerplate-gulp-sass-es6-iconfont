"use strict"

const gulpConfig = require('../gulp-config')
const del        = require('del')

module.exports = (gulp) => {

    gulp.task('clean:all', () => {
        return del([gulpConfig.distFolder])
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

};