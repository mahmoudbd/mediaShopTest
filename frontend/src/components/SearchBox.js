import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
function SearchBox({ history }) {
    const [keyword, setKeyword] = useState('');

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
        <Form
            className="form-inline my-2 my-lg-0 "
            onSubmit={submitHandler}
            inline
        >
            <Form.Control
                className="form-control mr-sm-2 m-auto"
                type="text"
                name="q"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search Products..."
            />
            <button
                type="submit"
                className="btn btn-outline-light my-2 my-sm-0"
            >
                Search
            </button>
        </Form>
    );
}

export default withRouter(SearchBox);
