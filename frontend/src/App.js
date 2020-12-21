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
import UserListPage from './pages/UserListPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';

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
						<Route path="/payment" component={PaymentPage} />
						<Route path="/placeorder" component={PlaceOrderPage} />
						<Route path="/order/:id" component={OrderPage} />
						<Route path="/admin/userlist" component={UserListPage} />
						<Route path="/admin/user/:id/edit" component={UserEditPage} />
						<Route
							path="/admin/productlist"
							exact
							component={ProductListPage}
						/>
						<Route
							path="/admin/product/:id/edit"
							exact
							component={ProductEditPage}
						/>
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
