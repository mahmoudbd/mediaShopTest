import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listUserOrders } from '../../actions/orderActions';
import { getUserDetails, updateUserProfile } from '../../actions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { USER_UPADTE_PROFILE_RESET } from '../../constants/userConstants';
import './ProfilePageNew.css';
export default function ProfilePageNew({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, user, error } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    const ordersListUser = useSelector((state) => state.ordersListUser);

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPADTE_PROFILE_RESET });
                dispatch(getUserDetails('profile'));
                dispatch(listUserOrders());
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [history, userInfo, dispatch, user, success]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Password do not match');
        } else {
            dispatch(
                updateUserProfile({ id: user._id, name, email, password })
            );
        }
    };

    return (
        <>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {success && <Message variant="success">PROFILE UPDATED</Message>}
            {loading && <Loader />}
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                {' '}
                                                {userInfo &&
                                                    userInfo.avatar && (
                                                        <img
                                                            src={
                                                                userInfo.avatar
                                                            }
                                                            className="img-radius"
                                                            alt="User-Profile-Image"
                                                        />
                                                    )}
                                                {userInfo &&
                                                    !userInfo.avatar && (
                                                        <img
                                                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                                                            className="img-radius"
                                                            alt="User-Profile-Image"
                                                        />
                                                    )}
                                            </div>
                                            <h6 className="f-w-600">{name}</h6>
                                            {userInfo && userInfo.isAdmin && (
                                                <p>Our Best Admin</p>
                                            )}
                                            {userInfo && !userInfo.isAdmin && (
                                                <p>Our Best Customer</p>
                                            )}
                                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                                Information
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Email
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        {email}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Phone
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        98979989898
                                                    </h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                Address
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Country
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        The Netherlands
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Details
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        De Van Gogh Street 12-2
                                                        Amsterdam
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="float-right my-2">
                                                <Button
                                                    href="/profileEdit"
                                                    size="lg"
                                                    variant="outline-secondary"
                                                    block
                                                >
                                                    Edit
                                                </Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
