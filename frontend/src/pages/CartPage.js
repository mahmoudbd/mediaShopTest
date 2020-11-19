import React, { useState, useEffect } from 'react';
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
	const cartItem = dummyProducts.find((item) => item.id === match.params.id);

	const q = location.search ? Number(location.search.split('=')[1]) : 1;

	const [ cartItems, setCartItems ] = useState([]);
	const [ qty, setQty ] = useState(Number(q));

	useEffect(
		() => {
			setCartItems([
				{
					productId: cartItem.id,
					name: cartItem.name,
					image: cartItem.image,
					price: cartItem.price,
					countInStock: cartItem.countInStock
				}
			]);
		},
		[ match ]
	);

	const removeFromCartHandler = (id) => {
		const removeItem = cartItems.filter((x) => x.productId !== id);
		setCartItems(removeItem);
	};
	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	};

	const changeHandler = (e) => {
		setQty(Number(e.target.value));
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
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
						{cartItems.map((item) => (
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
											value={qty}
											onChange={changeHandler}
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
								Subtotal ({cartItems.reduce((acc, item) => acc + qty, 0)}) items
							</h2>
							$
							{cartItems
								.reduce((acc, item) => acc + qty * item.price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type="button"
								className="btn-block"
								disabled={cartItems.length === 0}
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
