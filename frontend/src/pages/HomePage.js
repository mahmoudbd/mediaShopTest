import React from 'react';

import { Row, Col } from 'react-bootstrap';
import dummyProducts from '../dummyProducts';
import Product from '../components/Product';

function HomePage() {
	return (
		<React.Fragment>
			<h1>Welcome To MediaShop</h1>
			<h2>Products</h2>
			<Row>
				{dummyProducts.map((product) => (
					<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</React.Fragment>
	);
}

export default HomePage;
