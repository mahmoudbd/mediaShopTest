import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productsReducer,
	productDetailsReducer
} from './reducers/productsReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	userLoginRducer,
	userRegisterRducer,
	userDetailsReducer,
	userUpdateProfileReducer
} from './reducers/userReducers';
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderPayReducer
} from './reducers/orderReducers';

const reducer = combineReducers({
	productsList: productsReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginRducer,
	userRegister: userRegisterRducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer
});

const cartItemsFromStorge = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];
const userInfoFromStorge = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;
const shippingAddressFromStorge = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const initialState = {
	cart: {
		cartItems: cartItemsFromStorge,
		shippingAddress: shippingAddressFromStorge
	},
	userLogin: { userInfo: userInfoFromStorge }
};

const middleware = [ thunk ];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
