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
	PRODUCTS_CREATE_RESET,
	PRODUCTS_UPDATE_REQUEST,
	PRODUCTS_UPDATE_SUCCESS,
	PRODUCTS_UPDATE_FAIL,
	PRODUCTS_UPDATE_RESET,
	PRODUCTS_CREATE_REVIEW_REQUEST,
	PRODUCTS_CREATE_REVIEW_SUCCESS,
	PRODUCTS_CREATE_REVIEW_FAIL,
	PRODUCTS_CREATE_REVIEW_RESET,
	PRODUCTS_TOP_FAIL,
	PRODUCTS_TOP_REQUEST,
	PRODUCTS_TOP_SUCCESS
} from '../constants/productConstants';

export const productsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCTS_REQUEST: {
			return { loading: true, products: [] };
		}
		case PRODUCTS_SUCCESS: {
			return {
				loading: false,
				products: action.payload.products,
				pages: action.payload.pages,
				page: action.payload.page
			};
		}
		case PRODUCTS_FAIL: {
			return { loading: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCTS_DETAILS_REQUEST: {
			return { ...state, loading: true };
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

export const productCreateRducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCTS_CREATE_REQUEST:
			return { loading: true };
		case PRODUCTS_CREATE_SUCCESS:
			return { loading: false, success: true, product: action.payload };

		case PRODUCTS_CREATE_FAIL: {
			return { loading: false, error: action.payload };
		}
		case PRODUCTS_CREATE_RESET: {
			return {};
		}
		default: {
			return state;
		}
	}
};
export const productUpdateRducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCTS_UPDATE_REQUEST:
			return { loading: true };
		case PRODUCTS_UPDATE_SUCCESS:
			return { loading: false, success: true, product: action.payload };

		case PRODUCTS_UPDATE_FAIL: {
			return { loading: false, error: action.payload };
		}
		case PRODUCTS_UPDATE_RESET: {
			return { product: {} };
		}
		default: {
			return state;
		}
	}
};

export const productReviewCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCTS_CREATE_REVIEW_REQUEST: {
			return { loading: true };
		}
		case PRODUCTS_CREATE_REVIEW_SUCCESS: {
			return { loading: false, success: true };
		}
		case PRODUCTS_CREATE_REVIEW_FAIL: {
			return { loading: false, error: action.payload };
		}
		case PRODUCTS_CREATE_REVIEW_RESET: {
			return {};
		}
		default: {
			return state;
		}
	}
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCTS_TOP_REQUEST: {
			return { loading: true, products: [] };
		}
		case PRODUCTS_TOP_SUCCESS: {
			return { loading: false, products: action.payload };
		}
		case PRODUCTS_TOP_FAIL: {
			return { loading: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
};
