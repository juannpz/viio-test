const axios = require('axios')
const getProductsController = async() =>{
    try {
        const response = await axios.get('https://dummyjson.com/products');
        if (response) {
            const products = response.data.products
            return products
        }
        else throw new Error(`Error: ${response.status}`);
      } catch (error) {
        console.error(error);
        return 'Ocurrió un error al obtener los productos'
      }
}

module.exports = getProductsController