import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Table } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listAdminOrders } from '../actions/orderActions';

function OrderListPage({ history }) {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const ordersListAdmin = useSelector((state) => state.ordersListAdmin);
	const { loading, error, orders } = ordersListAdmin;

	useEffect(
		() => {
			if (userInfo && userInfo.isAdmin) {
				dispatch(listAdminOrders());
			} else {
				history.push('/login');
			}
		},
		[ dispatch, history, userInfo ]
	);

	console.log(orders, 'orders admin');
	return (
		<React.Fragment>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>USER</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>PAID</th>
							<th>DELIVERD</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.user && order.user.name}</td>
								<td>{order.createdAt.substring(0, 10)}</td>
								<td>${order.totalPrice}</td>
								<td>
									{order.isPaid ? (
										order.paidAt.substring(0, 10)
									) : (
										<i className="fas fa-times" style={{ color: 'red' }} />
									)}
								</td>
								<td>
									{order.isDelivered ? (
										order.deliveredAt.substring(0.1)
									) : (
										<i className="fas fa-times" style={{ color: 'red' }} />
									)}
								</td>
								<td>
									<LinkContainer to={`/order/${order._id}`}>
										<Button variant="light" className="btn-sm">
											Details
										</Button>
									</LinkContainer>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</React.Fragment>
	);
}

export default OrderListPage;
