import {
	PRODUCTS_SUCCESS,
	PRODUCTS_REQUEST,
	PRODUCTS_FAIL,
	PRODUCTS_DETAILS_REQUEST,
	PRODUCTS_DETAILS_SUCCESS,
	PRODUCTS_DETAILS_FAIL
} from '../constants/productConstants';

import axios from 'axios';

export const productsActions = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCTS_REQUEST
		});
		const res = await axios.get('api/products');
		dispatch({
			type: PRODUCTS_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_FAIL,
			payload: error.message
		});
	}
};

export const productAction = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCTS_DETAILS_REQUEST });
		const res = await axios.get(`/api/products/${id}`);
		dispatch({
			type: PRODUCTS_DETAILS_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_DETAILS_FAIL,
			payload: error.message
		});
	}
};
