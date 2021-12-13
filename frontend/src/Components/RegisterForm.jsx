import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Row, Col, Button } from 'react-bootstrap';
const axios = require('axios');

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successfulRegister, setSuccessfulRegister] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
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
                console.log(response);
                setSuccessfulRegister(true);
            })
            .catch(err => {
                console.error(err)
            });
    }

    return (
        <>
            {successfulRegister && <Redirect to={{
                pathname: "/login",
            }}
            />}
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