import axios from 'axios'
import ACTION_TYPES from '../../actionsTypes'

export const verifyJwtRequest = () => {
    return {
        type: ACTION_TYPES.VERIFY_JWT_REQUEST,
    }
}

export const verifyJwtSuccess = () => {
    return {
        type: ACTION_TYPES.VERIFY_JWT_SUCCESS,
    }
}

export const verifyJwtFailure = (error) => {
    return {
        type: ACTION_TYPES.VERIFY_JWT_FAILURE,
        payload: error,
    }
}

export const clearJwt = () => {
    return {
        type: ACTION_TYPES.CLEAR_JWT,
    }
}

export const verifyJwt = (token) => {
    return async (dispatch) => {
        try {
            dispatch(verifyJwtRequest())
            const response = await axios.post('/verify', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const verified = response.data;
            dispatch({
                type:ACTION_TYPES.VERIFY_JWT_SUCCESS,
                payload: verified
            })
        } catch (error) {
            dispatch(verifyJwtFailure(error.response))
        }
    }
}