import {
	PRODUCTS_SUCCESS,
	PRODUCTS_REQUEST,
	PRODUCTS_FAIL,
	PRODUCTS_DETAILS_REQUEST,
	PRODUCTS_DETAILS_SUCCESS,
	PRODUCTS_DETAILS_FAIL,
	PRODUCTS_DELETE_REQUEST,
	PRODUCTS_DELETE_SUCCESS,
	PRODUCTS_DELETE_FAIL,
	PRODUCTS_CREATE_REQUEST,
	PRODUCTS_CREATE_SUCCESS,
	PRODUCTS_CREATE_FAIL,
	PRODUCTS_UPDATE_REQUEST,
	PRODUCTS_UPDATE_SUCCESS,
	PRODUCTS_UPDATE_FAIL,
	PRODUCTS_CREATE_REVIEW_REQUEST,
	PRODUCTS_CREATE_REVIEW_SUCCESS,
	PRODUCTS_CREATE_REVIEW_FAIL,
	PRODUCTS_TOP_FAIL,
	PRODUCTS_TOP_REQUEST,
	PRODUCTS_TOP_SUCCESS
} from '../constants/productConstants';

import axios from 'axios';

export const productsActions = (keyword = '', pageNumber = '') => async (
	dispatch
) => {
	try {
		dispatch({
			type: PRODUCTS_REQUEST
		});
		const res = await axios.get(
			`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
		);
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

export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCTS_CREATE_REQUEST
		});

		const { userLogin: { userInfo } } = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			}
		};

		const { data } = await axios.post(`/api/products`, {}, config);

		dispatch({
			type: PRODUCTS_CREATE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const updateProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCTS_UPDATE_REQUEST
		});

		const { userLogin: { userInfo } } = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		};
		const { data } = await axios.put(
			`/api/products/${product._id}`,
			product,
			config
		);

		dispatch({
			type: PRODUCTS_UPDATE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const createProductReview = (productId, review) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({ type: PRODUCTS_CREATE_REVIEW_REQUEST });
		const { userLogin: { userInfo } } = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		};
		await axios.post(`/api/products/${productId}/reviews`, review, config);
		dispatch({ type: PRODUCTS_CREATE_REVIEW_SUCCESS });
	} catch (error) {
		dispatch({
			type: PRODUCTS_CREATE_REVIEW_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const listTopProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCTS_TOP_REQUEST
		});
		const res = await axios.get(`/api/products/top`);
		dispatch({
			type: PRODUCTS_TOP_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PRODUCTS_TOP_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
