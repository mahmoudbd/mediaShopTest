import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Container } from 'react-bootstrap';
import LoginUserPage from './pages/LoginUserPage';
import RegisterPage from './pages/RegisterPage';
import ProfilPage from './pages/ProfilePage';
import { AddCartContext } from './contexts/AddCartContext';
import { CartItemContext } from './contexts/CartItemContext';
import { RemoveCartContext } from './contexts/RemoveCartContext';
import { AddUserContext } from './contexts/AddUserContext';
import CheckoutPage from './pages/CheckoutPage';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);
    const addToCart = (product) => {
        const newCartItems = cartItems;
        let alreadyInCart = false;
        newCartItems.forEach((item) => {
            if (item._id === product._id) {
                item.quantity = product.quantity;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            newCartItems.push({ ...product });
        }
        setCartItems(newCartItems);
        localStorage.setItem('products', cartItems);
        setCount(cartItems.reduce((a, c) => a + c.quantity, 0));
    };

    const removeFromCart = (id) => {
        const newList = cartItems.filter((x) => {
            return x._id !== id;
        });
        setCartItems(newList);
        localStorage.removeItem('products');
        localStorage.setItem('products', cartItems);
        setCount(count - 1);
    };

    const addUserInfo = (user) => {
        localStorage.setItem('user', { ...user });
    };

    return (
        <AddCartContext.Provider value={addToCart}>
            <CartItemContext.Provider value={cartItems}>
                <RemoveCartContext.Provider value={removeFromCart}>
                    <AddUserContext.Provider value={addUserInfo}>
                        <Router>
                            <Header cartItems={count} />
                            <main className="py-3">
                                <Container>
                                    <Route
                                        path="/"
                                        component={HomePage}
                                        exact
                                    />
                                    <Route
                                        path="/product/:id"
                                        component={ProductPage}
                                    />
                                    <Route
                                        path="/cart/:id?"
                                        component={CartPage}
                                    />
                                    <Route
                                        path="/checkout_progress/:status?"
                                        component={CheckoutPage}
                                    />
                                    <Route
                                        path="/login"
                                        component={LoginUserPage}
                                    />
                                    <Route
                                        path="/register"
                                        component={RegisterPage}
                                    />
                                    <Route
                                        path="/profile"
                                        component={ProfilPage}
                                    />
                                </Container>
                            </main>
                            <Footer />
                        </Router>
                    </AddUserContext.Provider>
                </RemoveCartContext.Provider>
            </CartItemContext.Provider>
        </AddCartContext.Provider>
    );
}

export default App;
