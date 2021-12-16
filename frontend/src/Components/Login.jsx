import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
const axios = require('axios');

const Login = ({ loggedIn, setLoggedIn, setUsername }) => {

    const [user, setUser] = useState(``);
    const [password, setPassword] = useState(``);
    const [modalMessage, setModalMessage] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const handleSubmit = async e => {
        e.preventDefault();
        axios.put(`http://localhost:4000/login`, {
            "username": user,
            "password": password
        })
            .then((response) => {
                if (response.data.auth) {
                    localStorage.setItem(`user`, JSON.stringify(response.data));
                    setLoggedIn(true);
                    setUsername(response.data.validUser.username);
                } else {
                    console.log(response.data);
                }
            })
            .catch((err) => {
                console.log(err.message);
                setShow(true);
                setModalMessage(err.response.data);
            })
    }

    return (
        <>
            {loggedIn && <Redirect to={{
                pathname: "/",
            }}
            />}

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Invalid data</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formUsername">
                    <Form.Label column sm={2}>
                        Username:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Username..." value={user} onChange={event => setUser(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" placeholder="Password..." value={password} onChange={event => setPassword(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Button variant="dark" type="submit">Login</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
};

export default Login;