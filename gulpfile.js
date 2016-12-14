'use strict'

const gulp         = require('gulp')
const gulpUtils    = require('./gulp/gulp-utils')
const gulpSequence = require('gulp-sequence')

require('./gulp/tasks/environment')(gulp)
require('./gulp/tasks/clean')(gulp)
require('./gulp/tasks/copy')(gulp)
require('./gulp/tasks/sass')(gulp)
require('./gulp/tasks/scripts')(gulp)
require('./gulp/tasks/inlinesvg')(gulp)
require('./gulp/tasks/views')(gulp)
require('./gulp/tasks/connect')(gulp)

gulp.task('watch:views', ['views:watch-helpers', 'views:watch-partials', 'views:watch-pages'])
gulp.task('watch:all', ['copy:watch', 'sass:watch', 'scripts:watch', 'inlinesvg:watch', 'watch:views'])

gulp.task('default',
    gulpSequence(
        'environment',
        'clean:all',
		'inlinesvg:main',
        ['copy:assets', 'sass:main', 'scripts:main', 'views:main'],
        gulpUtils.isDevelopment() ? ['watch:all', 'connect'] : null
    )
)
