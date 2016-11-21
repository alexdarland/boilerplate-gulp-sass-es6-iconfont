"use strict"

const gulpUtils = require('../gulp-utils')

module.exports = (gulp) => {
    gulp.task('environment', gulpUtils.setEnvironment)
}