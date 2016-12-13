"use strict"

const gulp         = require('gulp')
const gulpConfig   = require('../gulp-config')
const gulpUtils    = require('../gulp-utils')
const gulpSequence = require('gulp-sequence')
const hb 		   = require('./hb')(gulpConfig.hbConfig)

module.exports = (gulp) => {

    gulp.task('views:main', function () {
		return gulp
			.src(hb.opts.pages)
			.pipe(hb.compile())
			.pipe(gulp.dest(gulpConfig.viewsDistFolder))
    })

    gulp.task('views:watch-helpers', () => {
        gulp.watch(hb.opts.helpers, (event) => {
            gulpUtils.logWatchEvent(event)
			hb.registerHelpers()
            gulpSequence('clean:views', 'views:main')(gulpUtils.mapError)
        })
    })

	gulp.task('views:watch-partials', () => {
		gulp.watch(hb.opts.views, (event) => {
			gulpUtils.logWatchEvent(event)
			hb.registerPartials()
			gulpSequence('clean:views', 'views:main')(gulpUtils.mapError)
		})
	})

	gulp.task('views:watch-pages', () => {
		gulp.watch(hb.opts.pages, (event) => {
			gulpUtils.logWatchEvent(event)
			gulpSequence('clean:views', 'views:main')(gulpUtils.mapError)
		})
	})

}
