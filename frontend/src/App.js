import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Container } from 'react-bootstrap';
import LoginUserPage from './pages/LoginUserPage';

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
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
