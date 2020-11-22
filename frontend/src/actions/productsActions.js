import {
	PRODUCTS_SUCCESS,
	PRODUCTS_REQUEST,
	PRODUCTS_FAIL
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
