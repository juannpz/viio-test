export const productsFilter = (products, search) => {
    const lowerCaseSearch = search.toLowerCase()
    return products.filter(product => {
        return product.title.toLowerCase().includes(lowerCaseSearch) ||
        product.brand.toLowerCase().includes(lowerCaseSearch)
    })
}