import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const axios = require('axios');

const AddPeep = loggedIn => {

    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:4000/addPeep`, {
            "peep": {
                "name": {
                    "first": `fred`,
                    "surname": `bill`
                },
                "username": `freddy`,
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
    }

    return (
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
    )
};

export default AddPeep;