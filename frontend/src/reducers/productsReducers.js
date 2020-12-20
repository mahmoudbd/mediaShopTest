import {
	PRODUCTS_SUCCESS,
	PRODUCTS_REQUEST,
	PRODUCTS_FAIL,
	PRODUCTS_DETAILS_REQUEST,
	PRODUCTS_DETAILS_SUCCESS,
	PRODUCTS_DETAILS_FAIL,
	PRODUCTS_DELETE_REQUEST,
	PRODUCTS_DELETE_SUCCESS,
	PRODUCTS_DELETE_FAIL
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

export const productDeleteRducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCTS_DELETE_REQUEST:
			return { loading: true };
		case PRODUCTS_DELETE_SUCCESS:
			return { loading: false, success: true };
		case PRODUCTS_DELETE_FAIL: {
			return { loading: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
};
