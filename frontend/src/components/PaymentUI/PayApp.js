import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Card, Button, CardGroup, Container } from 'react-bootstrap';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const ProductDisplay = ({ handleClick, src, price, name, id }) => (
    <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
            <Card.Title>$ {price}</Card.Title>
            <Card.Text>{name}</Card.Text>
        </Card.Body>
    </Card>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function PayApp({ cartItems }) {
    const [message, setMessage] = useState('');
    console.log(cartItems);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        console.log(query);
        if (query.get('success')) {
            setMessage('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    const handleClick = async () => {
        const stripe = await stripePromise;
        const response = await fetch('/api/create-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: {
                    infos: cartItems,
                },
            }),
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
        }
    };

    return message ? (
        <Message message={message} />
    ) : (
        <Container className="h-50 pt-5">
            <CardGroup>
                {cartItems.map((item) => (
                    <ProductDisplay
                        handleClick={handleClick}
                        src={item.image}
                        price={item.price}
                        name={item.name}
                        id={item.id}
                    />
                ))}
            </CardGroup>
            <Button className="mt-2" size="lg" block onClick={handleClick}>
                Checkout
            </Button>
        </Container>
    );
}
