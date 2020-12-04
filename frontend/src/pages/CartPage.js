import React, { useContext } from 'react';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartItemContext } from '../contexts/CartItemContext';
function CartPage({ history }) {
    const cartItems = useContext(CartItemContext);
    let subTotal = 0;
    let numberOfProducts = 0;
    subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    numberOfProducts = cartItems.reduce((a, c) => a + c.quantity, 0);
    console.log(numberOfProducts);
    const checkoutHandler = () => {
        console.log(cartItems);
        history.push(`/checkout_progress`);
    };
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    //=====================

    const btnName = userInfo ? 'Continue' : 'Continue as a guest';
    return (
        <>
            <h1>Shopping Cart</h1>
            <Row>
                {cartItems.length === 0 ? (
                    <span
                        style={{
                            width: '300px',
                            backgroundColor: 'lightpink',
                            fontSize: '20px',
                            display: 'block',
                        }}
                    >
                        Your Cart is empty... <Link to="/">Go Back</Link>
                    </span>
                ) : (
                    <>
                        <Col md={8}>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item._id}
                                    id={item._id}
                                    quantity={item.quantity ? item.quantity : 1}
                                />
                            ))}
                        </Col>

                        <Col md={4}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h2>
                                            Subtotal {Number(numberOfProducts)}
                                            items
                                        </h2>
                                        <h6> $ {subTotal.toFixed(2)}</h6>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            type="button"
                                            className="btn-block"
                                            disabled={cartItems.length === 0}
                                            onClick={checkoutHandler}
                                        >
                                            {btnName}
                                        </Button>
                                        {!userInfo && (
                                            <>
                                                <h6 className="d-flex justify-content-center">
                                                    or
                                                </h6>
                                                <Link to="/login">
                                                    <Button
                                                        type="button"
                                                        className="btn-block"
                                                        disabled={
                                                            cartItems.length ===
                                                            0
                                                        }
                                                    >
                                                        Log In & Sign Up
                                                    </Button>
                                                </Link>
                                            </>
                                        )}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
}

export default CartPage;
