import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
function SearchBox({ history }) {
	const [ keyword, setKeyword ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${encodeURIComponent(keyword)}`);
		} else {
			history.push('/');
		}
		setKeyword('');
	};
	return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type="text"
				name="q"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Products..."
				className="m-auto "
			/>
			<Button type="submit" className="p-2">
				<i className="fas fa-search" />
			</Button>
		</Form>
	);
}

export default withRouter(SearchBox);
