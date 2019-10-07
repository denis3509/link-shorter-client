import {createReducer} from "../utils";
import * as types from '../constants/mainPage'

const initialState = {
  table: [],
  shortUrl: null,
  isLoadingTable: false,
  errorTable: null,
  isLoadingShortUrl: false,
  errorShortUrl: null,
};

export default createReducer(initialState, {
  [types.GET_TABLE_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoadingTable: true, error: null})
  },
  [types.GET_TABLE_SUCCESS]: (state, action) => {
    const {table} = action;
    return Object.assign({}, state, {isLoadingTable: false, table})
  },
  [types.GET_TABLE_FAILURE]: (state, action) => {
    const {error} = action;
    return Object.assign({}, state, {isLoadingTable: false, error})
  },
  [types.CREATE_LINK_AUTH_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoadingShortUrl: true, errorShortUrl: null})
  },
  [types.CREATE_LINK_AUTH_SUCCESS]: (state, action) => {
    const {shortUrl} = action;
    return Object.assign({}, state, {isLoadingShortUrl: false, errorShortUrl: null, shortUrl})
  },
  [types.CREATE_LINK_AUTH_FAILURE]: (state, action) => {
    const {error} = action;
    return Object.assign({}, state,{  errorShortUrl : error})
  },
  [types.CREATE_LINK_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoadingShortUrl: true, errorShortUrl: null})
  },
  [types.CREATE_LINK_SUCCESS]: (state, action) => {
    const {shortUrl} = action;
    return Object.assign({}, state, {isLoadingShortUrl: false, errorShortUrl: null, shortUrl})
  },
  [types.CREATE_LINK_FAILURE]: (state, action) => {
    const {error} = action;
    return Object.assign({}, state,{error})
  },


})