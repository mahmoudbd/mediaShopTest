import React, { useEffect, useState } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Meta from '../components/Meta';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
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
	const [ sortByPrice, setSortByPrice ] = useState([]);
	const [ sorted, setSorted ] = useState([]);
	const [ sortedByBestRated, setSortedByBestRated ] = useState([]);
	useEffect(
		() => {
			dispatch(productsActions(keyword, pageNumber));
		},
		[ dispatch, keyword, pageNumber ]
	);
	const priceLowToHigh = () => {
		setSortByPrice(...products.sort((a, b) => a.price - b.price));
		console.log(sortByPrice, 'sort by price');
	};
	const priceHighToLow = () => {
		setSorted(...products.sort((a, b) => b.price - a.price));
		console.log(sorted, 'sortedS');
	};
	const bestRated = () => {
		setSortedByBestRated(...products.sort((a, b) => b.rating - a.rating));
		console.log(sortedByBestRated, 'best rated');
	};

	return (
		<React.Fragment>
			<Meta />
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					<h3>{error}</h3>
				</Message>
			) : products.length === 0 ? (
				<h3 style={{ backgroundColor: 'whitesmoke' }}>
					Product Not Found... <Link to="/">Go Back</Link>
				</h3>
			) : (
				<React.Fragment>
					<ButtonGroup size="lg" className="mb-2">
						<Button onClick={bestRated} variant="light">
							Best Rated
						</Button>
						<Button onClick={priceLowToHigh} variant="light">
							Low To High
						</Button>
						<Button onClick={priceHighToLow} variant="light">
							High To Low
						</Button>
					</ButtonGroup>
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
