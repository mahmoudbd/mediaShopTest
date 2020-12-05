import React, { useEffect, useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import Rating from '../components/Rating';

import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../actions/productsActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { AddCartContext } from '../contexts/AddCartContext';

function ProductPage({ match, history }) {
    const [qty, setQty] = useState(0);
    const [order, setOrder] = useState();
    const addToCart = useContext(AddCartContext);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { error, product, loading } = productDetails;
    useEffect(() => {
        dispatch(productAction(match.params.id));
    }, [match, dispatch]);

    const incQuantity = () => {
        let count = qty + 1;
        setQty(count);
        setOrder({ ...product, quantity: parseInt(qty + 1) });
    };
    const decQuantity = () => {
        let count = qty - 1;
        setQty(count);
        setOrder({ ...product, quantity: parseInt(qty - 1) });
    };
    return (
        <React.Fragment>
            <Link className="btn btn-primary my-3 " to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2> {product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Price: ${product.price} </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong> ${product.price} </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                <InputGroup className="sm">
                                                    <Button
                                                        variant="outline-danger"
                                                        onClick={decQuantity}
                                                        disabled={qty === 0}
                                                    >
                                                        -
                                                    </Button>
                                                    <FormControl
                                                        className="text-center"
                                                        value={qty}
                                                    />
                                                    <Button
                                                        variant="outline-warning"
                                                        onClick={incQuantity}
                                                        disabled={
                                                            product.countInStock <
                                                            qty
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={() => {
                                            addToCart(order);
                                        }}
                                        className="btn-block"
                                        type="button"
                                        disabled={
                                            product.countInStock === 0 ||
                                            qty === 0
                                        }
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </React.Fragment>
    );
}

export default ProductPage;
