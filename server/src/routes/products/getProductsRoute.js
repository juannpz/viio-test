const {Router} = require('express')
const getProductsHandler = require('../../handlers/products/getproductsHandler')
const checkToken = require('../../middlewares/checkToken')

const getProductsRoute = Router()

getProductsRoute.get('/products', checkToken, getProductsHandler)

module.exports = getProductsRoute