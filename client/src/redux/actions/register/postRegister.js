import axios from 'axios';
import ACTION_TYPES from '../../actionsTypes';

export const postRegisterRequest = () => {
    return {
        type: ACTION_TYPES.POST_REGISTER_REQUEST,
    }
}

export const postRegisterSuccess = () => {
    return {
        type: ACTION_TYPES.POST_REGISTER_SUCCESS,
    }
}

export const postRegisterFailure = (error) => {
    return {
        type: ACTION_TYPES.POST_REGISTER_FAILURE,
        payload: error,
    }
}

export const clearRegisterData = () => {
    return {
        type: ACTION_TYPES.CLEAR_REGISTER_DATA,
    }
}

export const postRegister = (formData) => {
    return async (dispatch) => {
        try {
            dispatch(postRegisterRequest());
            const response = await axios.post('/register', formData)
            const userData = response.data;
            dispatch({
                type:ACTION_TYPES.POST_REGISTER_SUCCESS,
                payload: userData,
            })
        } catch (error) {
            dispatch(postRegisterFailure(error.response))
        }
    }
}