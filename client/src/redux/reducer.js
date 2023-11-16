import ACTION_TYPES from './actionsTypes'

const initialState = {
    loginData: null,
    registerData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //LOGIN
        case ACTION_TYPES.POST_LOGIN_SUCCESS:
            return {
                ...state,
                loginData: action.payload,
            }
            
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
        

        //REGISTER
        case ACTION_TYPES.POST_REGISTER_SUCCESS:
            return {
                ...state,
                registerData: action.payload,
            }
            
        case ACTION_TYPES.POST_REGISTER_FAILURE:
            return {
                ...state,
                registerData: action.payload,
            }
            
        default:
            return {
                ...state
            }
    }
}

export default reducer
