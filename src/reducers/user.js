import {createReducer} from "../utils";
import * as types from '../constants/user'

const initialState = {
  userName : undefined,
  isAuth : false,
  message : undefined,
  error : undefined,
};
export default createReducer(initialState,{
  [types.SIGN_UP_SUCCESS] : (state,action) => {
    return Object.assign({},state,{message: 'sign up successful! sign in with your credentials'});
  },
  [types.SIGN_UP_FAILURE] : (state,action) => {
    const {error} = action;
    return Object.assign({}, state,  {error: error})
  },
  [types.SIGN_IN_SUCCESS] : (state,action) => {
    const {userName} = action;
    return Object.assign({},state,{ isAuth : true, userName});
  },
  [types.SIGN_IN_FAILURE] : (state,action) => {
    const {error} = action;
    return Object.assign({}, state,  { isAuth : false, error})
  },
  [types.LOG_OUT_SUCCESS] : (state,action) => {
    return Object.assign({},state,{ isAuth : false, userName: undefined});
  },
  [types.GET_USER_SUCCESS] : (state,action) => {
    const {userName} = action;
    return Object.assign({},state,{ isAuth : true, userName});
  },
  [types.GET_USER_FAILURE] : (state,action) => {
    return Object.assign({},state,{ isAuth : false, userName: null});
  }

})