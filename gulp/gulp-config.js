'use strict'

module.exports.srcFolder  = 'src'
module.exports.distFolder = 'dist'

module.exports.fontsSrcFolder  = this.srcFolder + '/ui/fonts'
module.exports.fontsDistFolder = this.distFolder + '/fonts'

module.exports.uiImgSrcFolder  = this.srcFolder + '/ui/img'
module.exports.uiImgDistFolder = this.distFolder + '/img'

module.exports.devImgSrcFolder  = this.srcFolder + '/ui/img'
module.exports.devImgDistFolder = this.distFolder + '/tmp/img'

module.exports.scriptsSrcFolder  = this.srcFolder + '/ui/js'
module.exports.scriptsDistFolder = this.distFolder + '/js'

module.exports.sassSrcFolder  = this.srcFolder + '/ui/scss'
module.exports.sassDistFolder = this.distFolder + '/css'

module.exports.viewsSrcFolder  = this.srcFolder + '/ui/views'
module.exports.viewsDistFolder = this.distFolder + '/page'

module.exports.iconsSrcFolder  = this.uiImgSrcFolder + '/svg'
module.exports.iconsDistFolder  = this.viewsSrcFolder + '/components'
module.exports.iconsFileName = 'inline-svg.hbs'

module.exports.hbConfig = {
	views: this.viewsSrcFolder + '/**/*.hbs',
	helpers: this.srcFolder + '/dev/data/helpers/*.js',
	pages: this.srcFolder + '/dev/data/pages/[^_]*.js'
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
