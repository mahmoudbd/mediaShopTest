import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Container } from 'react-bootstrap';
import ProfilPage from './pages/ProfilePage';
import UserListPage from './pages/UserListPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';
import HeaderNew from './components/Header/HeaderNew';
import Slides from './components/Slides';
import LoginPage from './pages/LoginPages/LoginPage';
import RegisterPageNew from './pages/LoginPages/RegisterPageNew';
import ProductPageNew from './pages/ProductPageNew';
import ProfilePageNew from './pages/ProfilPageNew/ProfilePageNew';

function App() {
	return (
		<React.Fragment>
			<Router>
				<HeaderNew />
				<Route path="/" exact>
					<Slides style={{ zIndex: -1 }} />
				</Route>
				<main className="py-3">
					<Container className="container">
						<Route path="/" component={HomePage} exact />
						<Route path="/search/:keyword" component={HomePage} exact />
						<Route path="/page/:pageNumber" component={HomePage} exact />
						<Route
							path="/search/:keyword/page/:pageNumber"
							component={HomePage}
						/>
						<Route path="/product/:id" component={ProductPageNew} />
						<Route path="/cart/:id?" component={CartPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/register" component={RegisterPageNew} />
						<Route path="/profile" component={ProfilePageNew} />
						<Route path="/profileEdit" component={ProfilPage} />
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
							path="/admin/productlist/:pageNumber"
							exact
							component={ProductListPage}
						/>
						<Route
							path="/admin/product/:id/edit"
							exact
							component={ProductEditPage}
						/>
						<Route path="/admin/orderlist" component={OrderListPage} />
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
