import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';
import axios from 'axios';

function HomePage() {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get('/api/products');
				setProducts(res.data);
			} catch (error) {
				console.error(error);
			}
		};
		getProducts();
	}, []);
	return (
		<React.Fragment>
			<h1>Welcome To MediaShop</h1>
			<h2>Products</h2>
			<Row>
				{products.map((product) => (
					<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</React.Fragment>
	);
}

export default HomePage;
