import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../logo.jpg';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<header>
			<React.Fragment>
				<Navbar
					bg="primary"
					variant="dark"
					expand="lg"
					collapseOnSelect
					style={{ borderBottom: '3px solid #DD611B' }}
				>
					<Container>
						<LinkContainer to="/">
							<Navbar.Brand>
								<img src={logo} alt="logo" className="logo" />
							</Navbar.Brand>
						</LinkContainer>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<SearchBox />
							<Nav className="ml-auto">
								<LinkContainer to="/">
									<Nav.Link>
										<i className="fas fa-home" />Home
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/cart">
									<Nav.Link>
										<i className="fas fa-shopping-cart" />Cart
										{cartItems.length > 0 && (
											<span>
												-{cartItems.reduce((acc, item) => acc + item.qty, 0)}
											</span>
										)}
									</Nav.Link>
								</LinkContainer>
								{userInfo ? (
									<NavDropdown
										title={userInfo.name}
										id="username"
										className="uppercase"
									>
										<LinkContainer to="/profile">
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								) : (
									<LinkContainer to="/login">
										<Nav.Link>
											<i className="fas fa-user" />Sign In
										</Nav.Link>
									</LinkContainer>
								)}
								{userInfo &&
								userInfo.isAdmin && (
									<NavDropdown title="Admin" id="adminmenu">
										<LinkContainer to="/admin/userlist">
											<NavDropdown.Item>Users</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to="/admin/productlist">
											<NavDropdown.Item>Products</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to="/admin/orderlist">
											<NavDropdown.Item>Orders</NavDropdown.Item>
										</LinkContainer>
									</NavDropdown>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		</header>
	);
};

export default Header;
