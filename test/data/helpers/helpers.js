const products = require('../globals/products')
const lang = require('../globals/lang/lang')

module.exports = [

	{
		name: 'getProduct',
		func: (productId) => {
			return products.find((product) => { return product.id === productId })
		}
	}/*,

	{
		name: 'eq',
		func: (val1, val2) => {
			return val1 === val2
		}
	}*/

]
