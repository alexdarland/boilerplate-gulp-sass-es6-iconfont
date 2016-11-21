"use strict"

const gulp         = require('gulp')
const gulpConfig   = require('../gulp-config')
const gulpUtils    = require('../gulp-utils')
const browserify   = require('browserify')
const source       = require('vinyl-source-stream')
const buffer       = require('vinyl-buffer')
const uglify       = require('gulp-uglify')
const gulpSequence = require('gulp-sequence')

const mainEntry = `${gulpConfig.scriptsSrcFolder}main.js`
const src       = `${gulpConfig.scriptsSrcFolder}**/*.js`

let mainEntryCash

const browserifyConfig = (entry) => {

    return {
        entries: [entry],
        extensions: ['.js'],
        debug: gulpUtils.isDevelopment(),
        cache: {},
        packageCache: {},
        transform: ['babelify']
    }

}

const bundle = (bw, fileName) => {
    bw.bundle()
        .on('error', gulpUtils.mapError)
        .pipe(source(`${fileName}.js`))
        .pipe(buffer())
        .pipe(gulpUtils.isProduction(uglify()))
        .pipe(gulp.dest(gulpConfig.scriptsDistFolder));
}

module.exports = (gulp) => {

    gulp.task('scripts:main', () => {
        mainEntryCash = mainEntryCash || browserify(browserifyConfig(mainEntry))
        bundle(mainEntryCash, 'main.min');
    });

    gulp.task('scripts:watch', () => {
        gulp.watch(src, (event) => {
            gulpUtils.logWatchEvent(event)
            gulpSequence('clean:scripts', 'scripts:main')(gulpUtils.mapError)
        })
    });

};