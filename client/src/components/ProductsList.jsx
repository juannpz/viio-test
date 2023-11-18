/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products/getProducts";
import { Link } from "react-router-dom";
import { productsFilter } from "../utils/productsFilter";

const ProductsList = ({ search }) => {

    const dispatch = useDispatch()
    const productsFromRedux = useSelector(state => state?.products)
    const token = JSON.parse(localStorage.getItem("loginData"))?.token
    const [productsToShow, setProductsToShow] = useState([])

    useEffect(() => {
        if (!productsFromRedux && token) {
            dispatch(getProducts(token))
        }
        productsFromRedux && setProductsToShow(productsFromRedux)
    }, [productsFromRedux, token])

    useEffect(() => {
        if (search.length > 1 && productsFromRedux) {
            setProductsToShow(productsFilter(productsFromRedux, search));
        } else if (productsFromRedux) {
            setProductsToShow(productsFromRedux);
        }
    }, [search, productsFromRedux]);


    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 justify-center items-centert text-center">

            {productsToShow?.map((product) => (

                <Link
                    to={`/productDetail/${product.id}`}
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">

                    <img
                        className="w-full h-64 object-contain"
                        src={product.thumbnail}
                        alt={product.title} />

                    <div
                        className="p-4 items-center">

                        <h2
                            className="mt-2 text-lg font-semibold text-blue-700">
                            {product.title}
                        </h2>

                        <p
                            className="text-sm text-gray-500">
                            {product.brand}
                        </p>

                        <div
                            className="mt-2 flex items-center">

                            <span
                                className="text-yellow-400 mr-2">
                                {"⭐".repeat(Math.round(product.rating))}
                            </span>

                            <span>
                                ({product.rating})
                            </span>
                        </div>

                        <p
                            className="mt-2 text-lg font-semibold text-green-600">
                            ${product.price}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsList