"use strict"

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

module.exports.iconsSrcFolder  = this.imgSrcFolder + 'svg/'
module.exports.iconsFontDistFolder = './src/fonts/icons/'
module.exports.iconsSassDistFolder = '../../scss/base/'
module.exports.iconsRelativeDistFolder = '../fonts/icons/'

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