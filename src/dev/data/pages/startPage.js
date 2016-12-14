const products = require('../globals/products')
const _pageBase = require('./_pageBase')

module.exports = () => {

	const pageData = {
		view: 'standardPage',
		model: {
			headline: 'This is the headline 1',
			preamble: 'Here comes some more text to represent the preamble section',
			content: [
				{
					view: 'productList',
					model: products
				}
			]
		}
	}

	return {
		view: 'defaultLayout',
		model: Object.assign({}, _pageBase, {
			title: 'Start Page',
			content: [pageData]
		})
	}
}
