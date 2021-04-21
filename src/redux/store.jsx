import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const reducer = (state = initialState, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
