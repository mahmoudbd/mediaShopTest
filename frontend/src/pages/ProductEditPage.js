import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import axios from 'axios';

import { productAction, updateProduct } from '../actions/productsActions';

import FormContainer from '../components/FormContainer';
import { PRODUCTS_UPDATE_RESET } from '../constants/productConstants';

function ProductEditPage({ match, history }) {
	const productId = match.params.id;

	const [ name, setName ] = useState('');
	const [ price, setPrice ] = useState(0);
	const [ image, setImage ] = useState('');
	const [ featureImage, setFeatureImage ] = useState('');
	const [ brand, setBrand ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ countInStock, setCountInStock ] = useState(0);
	const [ description, setDescription ] = useState('');
	const [ uploading, setUploading ] = useState(false);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, product, error } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		success: successUpdate,
		error: errorUpdate
	} = productUpdate;

	useEffect(
		() => {
			if (successUpdate) {
				dispatch({ type: PRODUCTS_UPDATE_RESET });
				history.push('/admin/productlist');
			} else {
				if (!product.name || product._id !== productId) {
					dispatch(productAction(productId));
				} else {
					setName(product.name);
					setPrice(product.price);
					setImage(product.image);
					setFeatureImage(product.featureImage);
					setBrand(product.brand);
					setCategory(product.category);
					setCountInStock(product.countInStock);
					setDescription(product.description);
				}
			}
		},
		[ dispatch, product, productId, history, successUpdate ]
	);

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setImage(data);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};
	const uploadFileHandlerF = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setFeatureImage(data);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				_id: productId,
				name,
				price,
				image,
				featureImage,
				brand,
				category,
				description,
				countInStock
			})
		);
	};

	return (
		<React.Fragment>
			<Link to="/admin/productlist" className="btn btn-primary my-3">
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit Product</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter price"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter image url"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
							<Form.File
								style={{ cursor: 'pointer' }}
								className="btn btn-light"
								id="image-file"
								label="Choose File"
								custom
								onChange={uploadFileHandler}
							/>
							{uploading && <Loader />}
						</Form.Group>

						<Form.Group controlId="image">
							<Form.Label>featureImage</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter image url"
								value={featureImage}
								onChange={(e) => setFeatureImage(e.target.value)}
							/>
							<Form.File
								style={{ cursor: 'pointer' }}
								className="btn btn-light"
								id="image-file"
								label="Choose File"
								custom
								onChange={uploadFileHandlerF}
							/>
							{uploading && <Loader />}
						</Form.Group>

						<Form.Group controlId="brand">
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter brand"
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="countInStock">
							<Form.Label>Count In Stock</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter countInStock"
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter category"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Group>

						<Button type="submit" variant="primary">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</React.Fragment>
	);
}

export default ProductEditPage;
