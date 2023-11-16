import ACTION_TYPES from './actionsTypes'

const initialState = {
    loginData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPES.POST_LOGIN_SUCCESS:
        return {
            ...state,
            loginData: action.payload,
        };
    case ACTION_TYPES.POST_LOGIN_FAILURE:
        return {
            ...state,
            loginData: action.payload,
        }

    case ACTION_TYPES.CLEAR_LOGIN_DATA:
        return {
            ...state,
            loginData: null
        }

    default: 
        return {...state}
    }
};

export default reducer
