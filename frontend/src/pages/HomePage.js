import React, { useEffect, useState } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../actions/productsActions';
import ProductCarousel from '../components/ProductCarousel';

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
			<h1 className="title">Welcome To MediaShop</h1>
			{!keyword && <ProductCarousel />}
			<h2>Products</h2>
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
						<Button onClick={priceLowToHigh} variant="outline-primary">
							Price:Low To High
						</Button>
						<Button onClick={priceHighToLow} variant="outline-success">
							Price:High To Low
						</Button>
						<Button onClick={bestRated} variant="outline-info">
							Best Rated
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
