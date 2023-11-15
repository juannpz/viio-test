import axios from 'axios';
import ACTION_TYPES from '../../actionsTypes'

export const postLoginRequest = () => {
  return {
    type: ACTION_TYPES.POST_LOGIN_REQUEST,
  };
};

export const postLoginSuccess = () => {
  return {
    type: ACTION_TYPES.POST_LOGIN_SUCCESS,
  };
};

export const postLoginFailure = (error) => {
  return {
    type: ACTION_TYPES.POST_LOGIN_FAILURE,
    payload: error,
  };
};

export const postLogin = ({email, password, token}) => {
  return async (dispatch) => {
    try {
      dispatch(postLoginRequest());
      const response = await axios.post('/login', email, password, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      dispatch({
        type:ACTION_TYPES.CREATE_BUSINESS_SUCCESS,
        payload: userData
      });
    } catch (error) {
      dispatch(postLoginFailure(error.message));
    }
  };
};