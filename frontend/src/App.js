import React from 'react';
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
import ShippingPage from './pages/ShippingPage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path="/" component={HomePage} exact />
						<Route path="/product/:id" component={ProductPage} />
						<Route path="/cart/:id?" component={CartPage} />
						<Route path="/login" component={LoginUserPage} />
						<Route path="/register" component={RegisterPage} />
						<Route path="/profile" component={ProfilPage} />
						<Route path="/shipping" component={ShippingPage} />
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
