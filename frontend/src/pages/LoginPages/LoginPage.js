import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	login,
	loginOrRegisterBySocialAccount
} from '../../actions/userActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import SocialButton from '../../components/SocialButton';
import './LoginPage.css';

export default function LoginPage({ location, history }) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, userInfo, error } = userLogin;
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
		dispatch(login(email, password));
	};

	const handleSocialLogin = (user) => {
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
							<div className="card-img-left d-none d-md-flex login" />
							<div className="card-body">
								<h5 className="card-title text-center">Login</h5>
								{error && <Message variant="danger">{error}</Message>}
								{loading && <Loader />}
								<form className="form-signin" onSubmit={submitHandler}>
									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control"
											placeholder="Email address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											autoComplete="on"
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
											autoComplete="on"
										/>
										<label htmlFor="inputPassword">Password</label>
									</div>

									<button
										className="btn btn-lg btn-primary btn-block text-uppercase"
										type="submit"
									>
										Login
									</button>
									<Link
										to={
											redirect ? `/register?redirect=${redirect}` : '/register'
										}
									>
										<p className="d-block text-center mt-2 small">Register</p>
									</Link>
									<hr className="my-4" />
									<SocialButton
										className="btn btn-lg btn-google btn-block text-uppercase"
										provider="google"
										appId="404354796732-cv6nfvb4o0oi1e0nff6j8ea4m68fl8bq.apps.googleusercontent.com"
										onLoginSuccess={handleSocialLogin}
										onLoginFailure={handleSocialLoginFailure}
									>
										<i className="fab fa-google mr-2" /> Sign in with Google
									</SocialButton>
									<SocialButton
										className="btn btn-lg btn-facebook btn-block text-uppercase"
										provider="facebook"
										appId="932701890595843"
										onLoginSuccess={handleSocialLogin}
										onLoginFailure={handleSocialLoginFailure}
									>
										<i className="fab fa-facebook-f mr-2" /> Sign in with
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
