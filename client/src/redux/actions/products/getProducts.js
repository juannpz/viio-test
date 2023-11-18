import axios from 'axios'
import ACTION_TYPES from '../../actionsTypes'

export const getProductsRequest = () => {
    return {
        type: ACTION_TYPES.GET_PRODUCTS_REQUEST,
    }
}

export const getProductsSuccess = () => {
    return {
        type: ACTION_TYPES.GET_PRODUCTS_SUCCESS,
    }
}

export const getProductsFailure = (error) => {
    return {
        type: ACTION_TYPES.GET_PRODUCTS_FAILURE,
        payload: error,
    }
}

export const clearProductsData = () => {
    return {
        type: ACTION_TYPES.CLEAR_LOGIN_DATA,
    }
}

export const getProducts = (token) => {
    return async (dispatch) => {
        try {
            dispatch(getProductsRequest())
            const response = await axios.get('/products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const products = response.data
            dispatch({
                type:ACTION_TYPES.GET_PRODUCTS_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch(getProductsFailure(error.response.data))
        }
    }
}