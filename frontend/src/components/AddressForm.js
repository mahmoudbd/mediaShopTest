import React, { useState, useReducer, useContext } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { AddUserContext } from '../contexts/AddUserContext';
const initialState = {};
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'name':
            return { ...state, name: action.name };
        case 'surname':
            return { ...state, surname: action.surname };
        case 'username':
            return { ...state, username: action.username };
        case 'city':
            return { ...state, city: action.city };
        case 'state':
            return { ...state, state: action.state };
        case 'zip':
            return { ...state, zip: action.zip };
        default:
            throw new Error();
    }
}

export default function AddressForm({ nextHandler }) {
    const addUserInfo = useContext(AddUserContext);
    const [validated, setValidated] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            addUserInfo(state);
            nextHandler(state);
        }
        event.preventDefault();
        setValidated(true);
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        dispatch({
            type: name,
            [name]: value,
        });
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        name="name"
                        type="text"
                        placeholder="First name"
                        value={state.name}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        name="surname"
                        type="text"
                        placeholder="Last name"
                        value={state.surname}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City"
                        required
                        name="city"
                        value={state.city}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="State"
                        required
                        name="state"
                        value={state.state}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Zip"
                        required
                        name="zip"
                        value={state.zip}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}
