import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
const axios = require('axios');

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successfulRegister, setSuccessfulRegister] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [show, setShow] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validUsername, setValidUsername] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async e => {
        e.preventDefault();

        let dupEmail = await axios.post(`http://localhost:4000/register/validateEmail`, {
            "email": email
        });

        if (dupEmail.data.length) {
            setModalMessage(`Email already registered`);
            setShow(true);
        };

        let dupUser = await axios.post(`http://localhost:4000/register/validateUsername`, {
            "username": username
        })
        if (!dupEmail.data.length && dupUser.data.length) {
            setModalMessage(`Username already taken`);
            setShow(true);
        };
        if (dupEmail.data.length + dupUser.data.length === 0) {
            axios.post(`http://localhost:4000/register`, {
                "user": {
                    "name": {
                        "first": firstName,
                        "surname": surname
                    },
                    "email": email,
                    "username": username,
                    "password": password
                }
            })
                .then((response) => {
                    setSuccessfulRegister(true);
                })
                .catch(err => {
                    console.log(err.response);
                    setShow(true);
                    setModalMessage(err.response.data);
                });
        }
    }

    return (
        <>
            {successfulRegister && <Redirect to={{
                pathname: "/login",
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

                <Form.Group as={Row} className="mb-3" controlId="formFirstName">
                    <Form.Label column sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="First name..." value={firstName} onChange={event => setFirstName(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSurname">
                    <Form.Label column sm={2}>
                        Surname
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Surname..." value={surname} onChange={event => setSurname(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" placeholder="Email..." value={email} onChange={event => setEmail(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formUsername">
                    <Form.Label column sm={2}>
                        Username:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Username..." value={username} onChange={event => setUsername(event.target.value)} />
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
                        <Button variant="dark" type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default RegisterForm;