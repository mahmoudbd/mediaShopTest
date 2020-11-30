import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import {
	Navbar,
	Nav,
	Container,
	Form,
	FormControl,
	NavDropdown
} from 'react-bootstrap';
import logo from '../logo.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

function Header() {
	const dispatch = useDispatch();
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
								<img src={logo} alt="logo" style={{ width: '35%' }} />
							</Navbar.Brand>
						</LinkContainer>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Form inline className="m-auto">
								<FormControl
									type="text"
									placeholder="Search Products"
									className=""
								/>
								<i className="fas fa-search" />
							</Form>
							<Nav className="ml-auto">
								<LinkContainer to="/">
									<Nav.Link>
										<i className="fas fa-home" />Home
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/cart">
									<Nav.Link>
										<i className="fas fa-shopping-cart" />Cart
									</Nav.Link>
								</LinkContainer>
								{userInfo ? (
									<NavDropdown title={userInfo.name} id="username">
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
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		</header>
	);
}

export default Header;
