import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../actions/productsActions';

function HomePage({ match }) {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.productsList);
	const { loading, products, error, page, pages } = productsList;

	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;

	useEffect(
		() => {
			dispatch(productsActions(keyword, pageNumber));
		},
		[ dispatch, keyword, pageNumber ]
	);
	return (
		<React.Fragment>
			<h1>Welcome To MediaShop</h1>
			<h2>Products</h2>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					<h3>{error}</h3>
				</Message>
			) : (
				<React.Fragment>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default HomePage;
