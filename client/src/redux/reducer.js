import ACTION_TYPES from './actionsTypes'

const initialState = {
    userData: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.POST_LOGIN_SUCCESS:
        return {
            ...state,
            userData: action.payload,
        };
        case ACTION_TYPES.POST_LOGIN_FAILURE:
        return state;

        default: 
            return {...state}
    }
    };

export default reducer;
