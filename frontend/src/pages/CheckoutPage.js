import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Row, ListGroup } from 'react-bootstrap';
import AddressForm from '../components/AddressForm';
import CartItem from '../components/CartItem';
import PayApp from '../components/PaymentUI/PayApp';
import { CartItemContext } from '../contexts/CartItemContext';
export default function CheckoutPage({ match }) {
    const cartItems = useContext(CartItemContext);
    const isFinished = match.params.status;
    const [change, setChange] = useState(0);
    const [state, setState] = useState([]);
    useEffect(() => {
        const isUserExist = localStorage.getItem('user');
        if (!isUserExist === null) {
            setState({ ...isUserExist });
        }
        console.log(state);
    }, [change]);

    const nextHandler = (state) => {
        setChange(1);
    };
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link
                        disabled="true"
                        className={
                            change === 0 && !isFinished
                                ? 'bg-primary text-light'
                                : ''
                        }
                        href="/home"
                    >
                        Address
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        disabled="true"
                        eventKey="link-1"
                        className={
                            change === 1 && !isFinished
                                ? 'bg-primary text-light'
                                : ''
                        }
                    >
                        Payment
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        disabled="true"
                        eventKey="link-2"
                        className={isFinished ? 'bg-primary text-light' : ''}
                    >
                        Thank You
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {isFinished ? (
                <Container>
                    <Card className="bg-dark text-white">
                        <Card.Img
                            src="https://media.giphy.com/media/lMameLIF8voLu8HxWV/giphy.gif"
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <h1>Now You can make celebration!</h1>
                        </Card.ImgOverlay>
                    </Card>
                </Container>
            ) : change !== 0 ? (
                <Container>
                    <PayApp cartItems={cartItems} />
                </Container>
            ) : (
                <Container className="pt-5">
                    <Row>
                        <Col md={7}>
                            <Card className="p-4">
                                <AddressForm nextHandler={nextHandler} />
                            </Card>
                        </Col>
                        <Col md={5}>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item._id}
                                    id={item._id}
                                    quantity={item.quantity}
                                />
                            ))}
                        </Col>
                    </Row>
                    <ListGroup>
                        <ListGroup.Item
                            variant="primary"
                            className="text-right"
                        >
                            <h1>
                                Total: $
                                {Number(
                                    cartItems.reduce(
                                        (a, c) => a + c.price * c.quantity,
                                        0
                                    )
                                ).toFixed(2)}
                            </h1>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            )}
        </div>
    );
}
