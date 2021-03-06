import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { register, signupBySocial } from '../../actions/userActions';

import './RegisterPage.css';
import SocialButton from '../../components/SocialButton';
import GoogleLogin from 'react-google-login';
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
		dispatch(
			signupBySocial(
				user._profile.name,
				user._profile.email,
				user._profile.id,
				user._profile.profilePicURL
			)
		);
	};
	const handleSocialLoginFailure = (err) => {
		console.error(err);
		// window.location.reload();
	};
	const responseGoogle = (user) => {
		console.log(user, 'google user');
		dispatch(
			signupBySocial(
				user.profileObj.name,
				user.profileObj.email,
				user.profileObj.googleId,
				user.profileObj.imageUrl
			)
		);
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
								{error && (
									<Message variant="danger">
										<h6>User already exists</h6>
									</Message>
								)}
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

									<GoogleLogin
										clientId={`${process.env.REACT_APP_GOOGEL_API}`}
										render={(renderProps) => (
											<button
												className="btn btn-lg btn-google btn-block text-uppercase"
												onClick={renderProps.onClick}
												disabled={renderProps.disabled}
											>
												REGISTER WITH GOOGLE
											</button>
										)}
										onSuccess={responseGoogle}
										onFailure={responseGoogle}
										cookiePolicy={'single_host_origin'}
									/>
									<SocialButton
										className="btn btn-lg btn-facebook btn-block text-uppercase"
										provider="facebook"
										appId={`${process.env.REACT_APP_FACEBOOK_API}`}
										onLoginSuccess={handleSocialLogin}
										onLoginFailure={handleSocialLoginFailure}
									>
										<i className="fab fa-facebook-f mr-2" /> REGISTER WITH
										FACEBOOK
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
