'use strict'

module.exports.srcFolder  = 'src/'
module.exports.distFolder = 'dist/'

module.exports.fontsSrcFolder  = this.srcFolder + 'fonts/'
module.exports.fontsDistFolder = this.distFolder + 'fonts/'

module.exports.imgSrcFolder  = this.srcFolder + 'img/'
module.exports.imgDistFolder = this.distFolder + 'img/'

module.exports.scriptsSrcFolder  = this.srcFolder + 'js/'
module.exports.scriptsDistFolder = this.distFolder + 'js/'

module.exports.sassSrcFolder  = this.srcFolder + 'scss/'
module.exports.sassDistFolder = this.distFolder + 'css/'

module.exports.viewsSrcFolder  = this.srcFolder + 'views/'
module.exports.viewsDistFolder = this.distFolder + 'page/'

module.exports.iconsSrcFolder  = this.imgSrcFolder + 'svg/'
module.exports.iconsDistFolder  = ''
module.exports.iconsFileName = 'InlineSvg.cshtml'

module.exports.hbConfig = {
	views: 'test/**/*.hbs',
	helpers: 'test/data/helpers/*.js',
	pages: 'test/data/pages/[^_]*.js'
}

module.exports.browserList = [

    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 8",
    "iOS >= 8",
    "Opera >= 12",
    "Safari >= 6"

]
