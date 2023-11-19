const getProductController = require('../../controllers/products/getProductsController')

const getProductsHandler = async(req, res) =>{
    try {
        const products = await getProductController()
        if(!products) return res.status(404).json({error:'product not found'})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getProductsHandler