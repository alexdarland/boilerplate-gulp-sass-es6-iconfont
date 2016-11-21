'use strict'

const gulp         = require('gulp')
const gulpUtils    = require('./gulp/gulp-utils')
const gulpSequence = require('gulp-sequence')

require('./gulp/tasks/environment')(gulp)
require('./gulp/tasks/clean')(gulp)
require('./gulp/tasks/copy')(gulp)
require('./gulp/tasks/sass')(gulp)
require('./gulp/tasks/scripts')(gulp)
require('./gulp/tasks/iconfont')(gulp)

gulp.task('watch:all', ['copy:watch', 'sass:watch', 'scripts:watch'])

gulp.task('default', gulpSequence('environment', 'clean:all', 'iconfont:main', ['copy:assets', 'sass:main', 'scripts:main'], gulpUtils.isDevelopment() ? 'watch:all' : null ))