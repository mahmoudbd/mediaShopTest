import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import {
    Row,
    Col,
    ListGroup,
    Image,
    Button,
    Spinner,
    FormControl,
    InputGroup,
} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RemoveCartContext } from '../contexts/RemoveCartContext';
import { AddCartContext } from '../contexts/AddCartContext';

function CartItem({ id, quantity }) {
    const [qty, setQty] = useState(quantity);
    const [product, setProduct] = useState();
    const [productDetail, setProductDetail] = useState([]);
    const removeFromCart = useContext(RemoveCartContext);
    const addToCart = useContext(AddCartContext);

    useEffect(() => {
        const getCartItems = async () => {
            try {
                const { data } = await axios.get(`/api/products/${id}`);
                setProductDetail([
                    {
                        productId: data._id,
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        countInStock: data.countInStock,
                    },
                ]);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCartItems();
    }, [id]);
    const incQuantity = () => {
        let count = qty + 1;
        setQty(count);
        addToCart({ ...product, quantity: parseInt(qty + 1) });
    };
    const decQuantity = () => {
        let count = qty - 1;
        setQty(count);
        addToCart({ ...product, quantity: parseInt(qty - 1) });
    };
    console.log(productDetail.length);
    return productDetail.length === 0 ? (
        <Spinner animation="border" variant="primary" />
    ) : (
        <Row>
            <Col md={12}>
                <ListGroup variant="flush">
                    <ListGroup.Item key={productDetail[0].productId}>
                        <Row>
                            <Col md={2}>
                                <Image
                                    src={productDetail[0].image}
                                    alt={productDetail[0].name}
                                    fluid
                                    rounded
                                />
                            </Col>
                            <Col md={3}>
                                <Link
                                    to={`/product/${productDetail[0].productId}`}
                                >
                                    {productDetail[0].name}
                                </Link>
                            </Col>
                            <Col md={2}>${productDetail[0].price}</Col>
                            <Col md={2}>
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
                                            productDetail[0].countInStock < qty
                                        }
                                    >
                                        +
                                    </Button>
                                </InputGroup>
                            </Col>
                            <Col md={2}>
                                <Button
                                    type="button"
                                    variant="light"
                                    onClick={() =>
                                        removeFromCart(
                                            productDetail[0].productId
                                        )
                                    }
                                >
                                    <i className="fas fa-trash" />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default CartItem;
