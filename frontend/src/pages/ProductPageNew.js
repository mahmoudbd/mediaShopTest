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
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	WhatsappShareButton,
	TwitterIcon,
	WhatsappIcon
} from 'react-share';

// console.log = console.warn = console.error = () => {};
// console.error('Something bad happened.');

function ProductPageNew({ match, history }) {
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
	const url = 'https://mediashop.com' + history.location.pathname;
	return (
		<React.Fragment>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Card>
					<Meta title={product.name} />
					<Row>
						<Col md={6}>
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
						</Col>
						<Col md={5}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h3 className="mb-0"> {product.name}</h3>
									{product.rating === 0 ? (
										<h4>NO Reviews</h4>
									) : (
										<RatingR
											className="mt-0"
											value={product.rating}
											text={`${product.numReviews} reviews`}
										/>
									)}
								</ListGroup.Item>

								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>

								<ListGroup.Item>
									<strong>Price: ${product.price} </strong>
								</ListGroup.Item>
								<ListGroup.Item>
									<strong>
										Status:{' '}
										{product.countInStock > 0 ? (
											'In Stock'
										) : (
											'Out Of Stock'
										)}{' '}
									</strong>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>
												<strong>Qty:</strong>
											</Col>
											<Col>
												<InputGroup>
													<Button
														size="sm"
														variant="outline-primary"
														value={qty}
														onClick={() => setQty(qty - 1)}
														disabled={qty === 0}
													>
														<i className="fas fa-minus-circle" />
													</Button>
													<p className="p-2">
														<strong>{qty}</strong>
													</p>
													<Button
														size="sm"
														variant="outline-primary"
														value={qty}
														onClick={() => setQty(qty + 1)}
														disabled={product.countInStock < qty + 1}
													>
														<i className="fas fa-plus-circle" />
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
										className="btn-block btn-light"
										type="button"
										disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
							<div className="float-right pr-3">
								<FacebookShareButton url={url} quote={product.name}>
									<FacebookIcon size={32} round={true} />
								</FacebookShareButton>
								<TwitterShareButton url={url} title={product.name}>
									<TwitterIcon size={32} round={true} />
								</TwitterShareButton>
								<WhatsappShareButton
									url={url}
									title={product.name}
									image={product.image}
								>
									<WhatsappIcon size={32} round={true} />
								</WhatsappShareButton>
							</div>
						</Col>
						{/* <Col md={3}></Col> */}
					</Row>
					<div className="mt-2 p-5">
						<Row>
							<Col md={6}>
								<Card.Title>Reviews</Card.Title>
								{product.reviews.length === 0 && (
									<Message variant="danger">No Reviews</Message>
								)}
								<ListGroup variant="flush">
									{product.reviews.map((review) => (
										<Card border="dark" key={review._id}>
											<Card.Header>
												{review.name}
												<span>
													{' '}
													-
													{review.createdAt.substring(0, 10)}
												</span>
											</Card.Header>
											<Card.Body>
												<Card.Title>
													{' '}
													<RatingR value={review.rating} />
													<p />
												</Card.Title>
												<Card.Text>{review.comment}</Card.Text>
											</Card.Body>
										</Card>
									))}
								</ListGroup>
							</Col>
							<Col md={5}>
								<React.Fragment>
									<Card.Title>Make Review</Card.Title>
									{errorProductReview && (
										<Message variant="danger">{errorProductReview}</Message>
									)}
									{loadingProductReview && <Loader />}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
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
								</React.Fragment>
							</Col>
						</Row>
					</div>
				</Card>
			)}
			<Link className="btn btn-light my-3 " to="/">
				Go Back
			</Link>
		</React.Fragment>
	);
}

export default ProductPageNew;
