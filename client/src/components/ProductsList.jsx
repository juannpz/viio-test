/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/actions/products/getProducts"
import { Link } from "react-router-dom"

const ProductsList = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const token = JSON.parse(localStorage.getItem("loginData"))?.token

    useEffect(() => {
        if (!products && token) {
            dispatch(getProducts(token))
        }
    }, [products, token])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 justify-center items-centert text-center">
            {products?.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">
                    <img className="w-full h-64 object-contain" src={product.thumbnail} alt={product.title} />
                    <div className="p-4 items-center">
                        <h2 className="mt-2 text-lg font-semibold text-blue-700">{product.title}</h2>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                        <div className="mt-2 flex items-center">
                            <span className="text-yellow-400 mr-2">
                                {"⭐".repeat(Math.round(product.rating))}
                            </span>
                            <span>({product.rating})</span>
                        </div>
                        <p className="mt-2 text-lg font-semibold text-green-600">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsList