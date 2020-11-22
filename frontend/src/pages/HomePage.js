import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../actions/productsActions';
function HomePage() {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.productsList);
	const { loading, products, error } = productsList;
	useEffect(
		() => {
			dispatch(productsActions());
		},
		[ dispatch ]
	);
	return (
		<React.Fragment>
			<h1>Welcome To MediaShop</h1>
			<h2>Products</h2>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</React.Fragment>
	);
}

export default HomePage;
