import thunkMiddleware from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import user from './reducers/user';
import mainPage from './reducers/mainPage'

const rootReducer = combineReducers({
 user,
  mainPage
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;