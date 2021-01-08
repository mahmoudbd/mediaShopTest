import React from 'react';
// import { Spinner } from 'react-bootstrap';
import Spinner from 'react-loader-spinner';
function Loader() {
	return (
		<Spinner
			type="Bars"
			color="#00BFFF"
			height={100}
			width={100}
			style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
		>
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
}

export default Loader;
