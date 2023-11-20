/* eslint-disable react-hooks/exhaustive-deps */
// ProductDetail.js
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearProductsData, getProducts } from '../redux/actions/products/getProducts'

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state?.products?.find(p => p.id == id))
    const token = JSON.parse(localStorage.getItem("loginData"))?.token

    useEffect(() => {
        if (token && !product) dispatch(getProducts(token))
    }, [token, product])

    useEffect(() => {
        return () => {
            dispatch(clearProductsData())
        }
    }, [])

    return (
        <div
            className="p-4 bg-white rounded-lg shadow-md">

            <img
                className="w-full h-64 object-contain"
                src={product.thumbnail}
                alt={product.title} />

            <div
                className="p-4">
                <h1
                    className="text-2xl font-semibold text-blue-700 mb-4">
                    {product.title}
                </h1>

                <h2
                    className="text-lg font-semibold text-blue-700">
                    {product.brand}
                </h2>

                <p
                    className="text-sm text-gray-500">
                    {product.description}
                </p>

                <div
                    className="mt-2 flex items-center">

                    <span
                        className="text-yellow-400 mr-2">
                        {"⭐".repeat(Math.round(product.rating))}
                    </span>

                    <span
                        className='text-gray-500'>
                        ({product.rating})
                    </span>
                </div>

                <p
                    className="mt-2 text-lg font-semibold text-green-600">
                    ${product.price}
                </p>

                <p
                    className="mt-2 text-sm text-gray-500">
                    Stock: {product.stock}
                </p>

                <p
                    className="mt-2 text-sm text-gray-500">
                    Categoría: {product.category}
                </p>

                {product.discount && (
                    <p
                        className="mt-2 text-sm text-red-500">
                        Descuento: {product.discount}%
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
