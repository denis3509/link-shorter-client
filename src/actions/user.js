import * as types from '../constants/user'
import api from '../network/api'
import Cookies from 'js-cookie'
export const signUp = (email,userName, password,callback) => async dispatch => {
  api.signUp(email,userName,password)
    .then(response=>{
      const {userName} = response.data;
      dispatch({
        type : types.SIGN_UP_SUCCESS,
        userName: userName
      });
     if(callback) callback(true);
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;

      dispatch({
        type: types.SIGN_UP_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};

export const signIn = (email,password,callback) => async dispatch => {
  api.signIn(email, password)
    .then(response=>{
      const {userName, token} = response.data;

      Cookies.remove('token');
      Cookies.set('token', token);

      dispatch({
        type : types.SIGN_IN_SUCCESS,
        userName: userName
      });
     if(callback) callback(true);
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;
      dispatch({
        type: types.SIGN_IN_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};
export const getUser = () => async dispatch=> {

  api.getUser()
    .then(response=>{
      const {userName} = response.data;
      dispatch({
        type : types.GET_USER_SUCCESS,
        userName
      })
    })
    .catch(error=>{
      dispatch({
        type : types.GET_USER_FAILURE,
      })
    })
};
export const logout = () => {
  Cookies.remove('token');
 return {
    type : types.LOG_OUT_SUCCESS
  }
};