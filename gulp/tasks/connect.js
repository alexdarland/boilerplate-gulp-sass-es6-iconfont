"use strict"

const connect = require('gulp-connect');

module.exports = (gulp) => {

    gulp.task('connect', () => {
		connect.server({
			port: 3000,
			root: 'dist'
		});
    });

};
