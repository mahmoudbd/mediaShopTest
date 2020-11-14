import React, { useState } from 'react';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import dummyProducts from '../dummyProducts';

function CartPage({ match, location, history }) {
	const cartItems = dummyProducts.find((item) => item.id === match.params.id);

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;
	const arr = [
		...Array(cartItems).map((item) => {
			return {
				productId: item.id,
				name: item.name,
				image: item.image,
				price: item.price,
				countInStock: item.countInStock,
				qty
			};
		})
	];

	const [ cartItem, setCartItem ] = useState(arr);

	const removeFromCartHandler = (id) => {
		const removeItem = cartItem.filter((x) => x.productId !== id);
		setCartItem(removeItem);
	};
	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItem.length === 0 ? (
					<span
						style={{
							width: '300px',
							backgroundColor: 'lightpink',
							fontSize: '20px',
							display: 'block'
						}}
					>
						Your Cart is empty... <Link to="/">Go Back</Link>
					</span>
				) : (
					<ListGroup variant="flush">
						{cartItem.map((item) => (
							<ListGroup.Item key={item.productId}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/product/${item.productId}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as="select"
											value={item.qty}
											onChange={(e) => setCartItem(Number(e.target.value))}
										>
											{[ ...Array(item.countInStock).keys() ].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type="button"
											variant="light"
											onClick={() => removeFromCartHandler(item.productId)}
										>
											<i className="fas fa-trash" />
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>
								Subtotal ({cartItem.reduce((acc, item) => acc + item.qty, 0)})
								items
							</h2>
							${cartItem
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type="button"
								className="btn-block"
								disabled={cartItem.length === 0}
								onClick={checkoutHandler}
							>
								Proceed To Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
}

export default CartPage;
