import React from 'react';

import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import logo from '../logo.jpg';

function Header() {
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
						<Navbar.Brand href="/">
							<img src={logo} alt="logo" style={{ width: '35%' }} />
						</Navbar.Brand>
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
								<Nav.Link href="/">
									<i className="fas fa-home" />Home
								</Nav.Link>
								<Nav.Link href="/cart">
									<i className="fas fa-shopping-cart" />Cart
								</Nav.Link>
								<Nav.Link href="/login">
									<i className="fas fa-user" />Sign In
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		</header>
	);
}

export default Header;
