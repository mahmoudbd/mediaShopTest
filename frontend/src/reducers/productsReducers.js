import {
	PRODUCTS_SUCCESS,
	PRODUCTS_REQUEST,
	PRODUCTS_FAIL,
	PRODUCTS_DETAILS_REQUEST,
	PRODUCTS_DETAILS_SUCCESS,
	PRODUCTS_DETAILS_FAIL
} from '../constants/productConstants';

export const productsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCTS_REQUEST: {
			return { loading: true, products: [] };
		}
		case PRODUCTS_SUCCESS: {
			return { loading: false, products: action.payload };
		}
		case PRODUCTS_FAIL: {
			return { loading: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const productDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCTS_DETAILS_REQUEST: {
			return { loading: true, product: {} };
		}
		case PRODUCTS_DETAILS_SUCCESS: {
			return { loading: false, product: action.payload };
		}
		case PRODUCTS_DETAILS_FAIL: {
			return { loading: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
};