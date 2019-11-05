import * as types from '../constants/mainPage'
import api from '../network/api'

export const getTable = ()=> async dispatch => {
  dispatch({type: types.GET_TABLE_REQUEST});
  api.getTable()
    .then(response=>{
      const {linksTable} = response.data;

      dispatch({
        type: types.GET_TABLE_SUCCESS,
        table : linksTable
      })
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;
      dispatch({
        type: types.GET_TABLE_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};

export const createLinkAuth = (url) => async dispatch => {
  dispatch({
    type: types.CREATE_LINK_AUTH_REQUEST,
  });
  api.createLinkAuth(url)
    .then(response=>{
      const {shortUrl} = response.data;
      dispatch({
        type : types.CREATE_LINK_AUTH_SUCCESS,
        shortUrl
      });
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;
      dispatch ({
        type : types.CREATE_LINK_AUTH_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};


export const createLink = (url) => async dispatch => {
  dispatch({
    type: types.CREATE_LINK_REQUEST,
  });
  api.createLink(url)
    .then(response=>{
      const {shortUrl} = response.data;
      dispatch({
        type : types.CREATE_LINK_SUCCESS,
        shortUrl
      });
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;
      dispatch ({
        type : types.CREATE_LINK_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};

export const removeLink = (link_id) => async dispatch => {
  dispatch({
    type: types.REMOVE_LINK_REQUEST,
  });
  api.removeLink(link_id)
    .then(response=>{
      const {shortUrl} = response.data;
      dispatch({
        type : types.REMOVE_LINK_SUCCESS,
        shortUrl
      });
    })
    .catch(error=>{
      let message =  error.response && error.response && error.response.data &&  error.response.data.message;
      dispatch ({
        type : types.REMOVE_LINK_FAILURE,
        error : (typeof(message)==='string') ? message : 'error'
      })
    })
};