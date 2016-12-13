const through 	= require('through2');
const hb      	= require('handlebars')
const fs 	  	= require('fs')
const glob 		= require('glob');
const path 		= require('path');
const beautify 	= require('js-beautify').html

let _opts = {}

var _invalidateRequireCacheForFile = function(filePath){
	delete require.cache[path.resolve(filePath)];
};

var requireNoCache =  function(filePath){
	_invalidateRequireCacheForFile(filePath);
	return require(filePath);
};

const _registerHelpers = () => {
	glob.sync(_opts.helpers.toString(), { realpath: true }).map(_registerHelper)
}

const _registerHelper = (path) => {
	requireNoCache(path).forEach(function(self) {
		hb.registerHelper(self.name, self.func);
	});
}

const _registerPartials = () => {
	hb.partials = []
	glob.sync(_opts.views.toString()).map(_registerPartial)
}

const _registerPartial = (filePath) => {
	var view = fs.readFileSync(filePath, 'utf8');
	var name = path.basename(filePath, path.extname(filePath))
	hb.registerPartial(name, view);
}

module.exports = (opts) => {

	_opts = opts
	_registerHelpers()
	_registerPartials()

	return {

		opts: _opts,

		registerHelpers:  _registerHelpers,

		registerPartials: _registerPartials,

		compile: () => {
			return through.obj(function (file, enc, cb) {

				try {
					var pageData = requireNoCache(file.path)()
					var layout 	 = hb.partials[pageData.view];
					var template = hb.compile(layout)
					var	markup 	 = template({ model: pageData.model })
					var cleanMarkup = beautify(markup)

					file.path = file.path.substr(0, file.path.lastIndexOf('.')) + '.html';
					file.contents = new Buffer(cleanMarkup);

					this.push(file);
				}
				catch(e) {
					console.log('Compile error: ', e.message)
				}
				finally {
					cb();
				}
			});
		}
	}
}
