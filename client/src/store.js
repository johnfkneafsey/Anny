import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer/reducer';

const store = createStore(reducers.appReducer, applyMiddleware(thunk));

export default store;
