import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import {
	register,
	loginOrRegisterBySocialAccount
} from '../../actions/userActions';

import './RegisterPage.css';
import SocialButton from '../../components/SocialButton';
export default function RegisterPageNew({ location, history }) {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ message, setMessage ] = useState(null);

	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, userInfo, error } = userRegister;
	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(
		() => {
			if (userInfo) {
				history.push(redirect);
			}
		},
		[ history, userInfo, redirect ]
	);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Password do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};
	const handleSocialLogin = (user) => {
		console.log(user);
		dispatch(
			loginOrRegisterBySocialAccount(
				user._profile.name,
				user._profile.email,
				user._profile.id,
				user._profile.profilePicURL
			)
		);
	};
	const handleSocialLoginFailure = (err) => {
		console.error(err);
		window.location.reload();
	};
	return (
		<div className="body">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 col-xl-9 mx-auto">
						<div className="card card-signin flex-row my-5">
							<div className="card-img-left d-none d-md-flex" />
							<div className="card-body">
								<h5 className="card-title text-center">Register</h5>
								{message && <Message variant="danger">{message}</Message>}
								{error && <Message variant="danger">{error}</Message>}
								{loading && <Loader />}
								<form className="form-signin" onSubmit={submitHandler}>
									<div className="form-label-group">
										<input
											type="name"
											id="name"
											className="form-control"
											placeholder="Enter name"
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
											autoFocus
										/>
										<label htmlFor="name">Name</label>
									</div>

									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control"
											placeholder="Email address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
										<label htmlFor="inputEmail">Email address</label>
									</div>

									<hr />

									<div className="form-label-group">
										<input
											type="password"
											id="inputPassword"
											className="form-control"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
										<label htmlFor="inputPassword">Password</label>
									</div>

									<div className="form-label-group">
										<input
											type="password"
											id="inputConfirmPassword"
											className="form-control"
											placeholder="Password"
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											required
										/>
										<label htmlFor="inputConfirmPassword">
											Confirm password
										</label>
									</div>

									<button
										className="btn btn-lg btn-primary btn-block text-uppercase"
										type="submit"
									>
										Register
									</button>

									<Link
										to={redirect ? `/login?redirect=${redirect}` : '/login'}
									>
										<p className="d-block text-center mt-2 small">Sign In</p>
									</Link>
									<hr className="my-4" />
									<SocialButton
										className="btn btn-lg btn-google btn-block text-uppercase"
										provider="google"
										appId="404354796732-cv6nfvb4o0oi1e0nff6j8ea4m68fl8bq.apps.googleusercontent.com"
										onLoginSuccess={handleSocialLogin}
										onLoginFailure={handleSocialLoginFailure}
									>
										<i className="fab fa-google mr-2" /> Sign up with Google
									</SocialButton>
									<SocialButton
										className="btn btn-lg btn-facebook btn-block text-uppercase"
										provider="facebook"
										appId="192433112580443"
										onLoginSuccess={handleSocialLogin}
										onLoginFailure={handleSocialLoginFailure}
									>
										<i className="fab fa-facebook-f mr-2" /> Sign up with
										Facebook
									</SocialButton>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
