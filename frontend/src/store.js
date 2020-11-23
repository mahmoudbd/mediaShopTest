import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productsReducer,
	productDetailsReducer
} from './reducers/productsReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	productsList: productsReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer
});

const cartItemsFromStorge = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];
const initialState = { cart: { cartItems: cartItemsFromStorge } };
const middleware = [ thunk ];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
