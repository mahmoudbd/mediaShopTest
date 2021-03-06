import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../logoSimely.PNG';
import { logout } from '../../actions/userActions';
import './HeaderNew.css';
import SearchBox from '../SearchBox';
import { Link } from 'react-router-dom';
export default function HeaderNew() {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<nav
			className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark"
			style={{ zIndex: '10', background: '' }}
		>
			<Link className="navbar-brand" to="/">
				<img style={{ width: '10rem' }} src={logo} alt="logo" />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							<i className="fa fa-home" />
							Home
							<span className="sr-only">(current)</span>
						</Link>
					</li>
				</ul>
				<SearchBox />
				<ul />

				<ul className="navbar-nav ">
					<li className="nav-item">
						<Link className="nav-link" to="/cart">
							<i className="fa fa-shopping-cart">
								{cartItems.length > 0 && (
									<span className="badge badge-primary">
										{cartItems.reduce((acc, item) => acc + item.qty, 0)}
									</span>
								)}
							</i>
							Cart
						</Link>
					</li>

					{userInfo ? (
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle uppercase"
								to="/"
								id="username"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<p>{userInfo.name}</p>
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/profile">
									Profile
								</Link>
								{userInfo &&
								userInfo.isAdmin && (
									<React.Fragment>
										<Link className="dropdown-item" to="/admin/userlist">
											Users
										</Link>
										<Link className="dropdown-item" to="/admin/productlist">
											Products
										</Link>
										<Link className="dropdown-item" to="/admin/orderlist">
											Orders
										</Link>
									</React.Fragment>
								)}
								<button className="dropdown-item" onClick={logoutHandler}>
									Logout
								</button>
							</div>
						</li>
					) : (
						<li className="nav-item ">
							<a className="nav-link" href="/login">
								<i className="fa fa-user" />
								Sign-In
								<span className="sr-only">(current)</span>
							</a>
						</li>
					)}
					{userInfo &&
					userInfo.avatar && (
						<li className="nav-item ">
							<Avatar round={true} size="50" src={userInfo.avatar} />
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}
