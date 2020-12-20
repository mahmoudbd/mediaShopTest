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

import axios from 'axios';

export const productsActions = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCTS_REQUEST
		});
		const res = await axios.get('/api/products');
		dispatch({
			type: PRODUCTS_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
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
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: PRODUCTS_DELETE_REQUEST });
		const { userLogin: { userInfo } } = getState();
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			}
		};
		await axios.delete(`/api/products/${id}`, config);

		dispatch({ type: PRODUCTS_DELETE_SUCCESS });
	} catch (error) {
		dispatch({
			type: PRODUCTS_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
