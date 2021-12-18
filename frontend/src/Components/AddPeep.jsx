import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
const axios = require('axios');

const AddPeep = loggedIn => {

    const [message, setMessage] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const handleClose = () => {
        setShow(false);
        setRedirect(true);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (localStorage.getItem("user")) {

            const data = JSON.parse(localStorage.getItem("user")).validUser;
            console.log(data);

            axios.post(`http://localhost:4000/addPeep`, {
                "peep": {
                    "name": {
                        "first": data.name.first,
                        "surname": data.name.surname
                    },
                    "username": data.username,
                    "date": new Date(Date.now()),
                    "message": message
                }
            })
                .then((response) => {
                    console.log(response);
                })
                .catch(err => {
                    console.error(err)
                });
        } else {
            setShow(true);
            setModalMessage(`You need to be logged in to do this`);
        }
    }

    return (
        <>
            {redirect && <Redirect to={{
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
                <Form.Group as={Row} className="mb-3" controlId="formMessage">
                    <Form.Label column sm={2}>
                        Message:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="textarea" style={{ height: '100px' }} type="text" placeholder="Enter your message here..." value={message} onChange={event => setMessage(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Button variant="dark" type="submit">Post</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
};

export default AddPeep;