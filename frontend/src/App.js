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
<<<<<<< HEAD
import UserListPage from './pages/UserListPage';
=======
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
>>>>>>> cbdfab8e323fb4d4f650b48130f34ba08b0a91cb

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
<<<<<<< HEAD
						<Route path="/admin/userlist" component={UserListPage} />
=======
						<Route path="/shipping" component={ShippingPage} />
						<Route path="/payment" component={PaymentPage} />
						<Route path="/placeorder" component={PlaceOrderPage} />
						<Route path="/order/:id" component={OrderPage} />
>>>>>>> cbdfab8e323fb4d4f650b48130f34ba08b0a91cb
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
