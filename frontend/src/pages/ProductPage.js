import React, { useEffect, useState } from 'react';
import Meta from '../components/Meta';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Card,
	Button,
	Form,
	InputGroup
} from 'react-bootstrap';
import RatingR from '../components/RatingR';

import { useDispatch, useSelector } from 'react-redux';
import { productAction, createProductReview } from '../actions/productsActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { PRODUCTS_CREATE_REVIEW_RESET } from '../constants/productConstants';

console.log = console.warn = console.error = () => {};
console.error('Something bad happened.');

function ProductPage({ match, history }) {
	const [ qty, setQty ] = useState(1);
	const [ rating, setRating ] = useState(0);
	const [ comment, setComment ] = useState('');

	const [ settings ] = useState({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides'
	});
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { error, product, loading } = productDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const productReviewCreate = useSelector((state) => state.productReviewCreate);
	const {
		loading: loadingProductReview,
		error: errorProductReview,
		success: successProductReview
	} = productReviewCreate;

	useEffect(
		() => {
			if (successProductReview) {
				alert('Review Submitted!');
				setRating(0);
				setComment('');
				dispatch({ type: PRODUCTS_CREATE_REVIEW_RESET });
			}
			dispatch(productAction(match.params.id));
		},
		[ match, dispatch, successProductReview ]
	);
	const addToCart = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProductReview(match.params.id, {
				rating,
				comment
			})
		);
	};
	return (
		<React.Fragment>
			<Link className="btn btn-primary my-3 " to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<React.Fragment>
					<Meta title={product.name} />
					<Row>
						<Col md={6}>
							{/* <Image src={product.image} alt={product.name} fluid /> */}
							<React.Fragment>
								<Slider {...settings}>
									<div>
										<InnerImageZoom
											src={product.image}
											zoomSrc={product.image}
											alt={product.name}
											zoomScale={2}
										/>
									</div>
									{product.featureImage !== '' && (
										<div>
											<InnerImageZoom
												src={product.featureImage}
												zoomSrc={product.featureImage}
												alt={product.name}
												zoomScale={2}
											/>
										</div>
									)}
								</Slider>
							</React.Fragment>
						</Col>

						<Col md={3}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h2> {product.name}</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									{product.rating === 0 ? (
										<h4>NO Reviews</h4>
									) : (
										<RatingR
											value={product.rating}
											text={`${product.numReviews} reviews`}
										/>
									)}
								</ListGroup.Item>

								<ListGroup.Item>
									<strong>Price: ${product.price} </strong>
								</ListGroup.Item>
								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong> ${product.price} </strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									{product.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col> Qty:</Col>
												<Col>
													<InputGroup>
														<Button
															size="sm"
															variant="outline-primary"
															value={qty}
															onClick={() => setQty(qty + 1)}
															disabled={product.countInStock < qty + 1}
														>
															<i className="fas fa-plus-circle" />
														</Button>
														<p style={{ padding: '0 5px' }}>
															<strong>{qty}</strong>
														</p>
														<Button
															size="sm"
															variant="outline-primary"
															value={qty}
															onClick={() => setQty(qty - 1)}
															disabled={qty === 0}
														>
															<i className="fas fa-minus-circle" />
														</Button>
														{/* {[
															...Array(product.countInStock).keys()
														].map((x) => (
															<option key={x + 1} value={x + 1}>
																{x + 1}
															</option>
														))} */}
													</InputGroup>
												</Col>
											</Row>
										</ListGroup.Item>
									)}

									<ListGroup.Item>
										<Button
											onClick={addToCart}
											className="btn-block"
											type="button"
											disabled={product.countInStock === 0}
										>
											Add To Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<h2>Reviews</h2>
							{product.reviews.length === 0 && (
								<Message variant="primary">No Reviews</Message>
							)}
							<ListGroup variant="flush">
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<RatingR value={review.rating} />
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2>Write a Customer Review</h2>
									{errorProductReview && (
										<Message variant="warning">{errorProductReview}</Message>
									)}
									{loadingProductReview && <Loader />}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											{/* <Form.Group controlId="rating">
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as="select"
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option value="">Select...</option>
													<option value="1">1 - poor</option>
													<option value="2">2 - Fair</option>
													<option value="3">3 - Good</option>
													<option value="4">4 - Very Good</option>
													<option value="5">5 - Excellent</option>
												</Form.Control>
											</Form.Group> */}
											<Box
												component="fieldset"
												mb={3}
												borderColor="transparent"
											>
												<Typography component="legend">Rating</Typography>
												<Rating
													name="half-rating"
													precision={0.5}
													size="large"
													value={rating}
													style={{ color: '#FF651D' }}
													onChange={(event, newValue) => {
														setRating(newValue);
													}}
												/>
											</Box>
											<Form.Group controlId="comment">
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as="textarea"
													row="3"
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												/>
											</Form.Group>
											<Button type="submit" variat="primary">
												Submit
											</Button>
										</Form>
									) : (
										<Message variant="primary">
											Please <Link to="/login">Sign in</Link> to write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default ProductPage;
