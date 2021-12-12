import { Form, Row, Col, Button } from 'react-bootstrap';

const RegisterForm = () => {
    return (
        <Form>

            <Form.Group as={Row} className="mb-3" controlId="formFirstName">
                <Form.Label column sm={2}>
                    First Name
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="First name..." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formSurname">
                <Form.Label column sm={2}>
                    Surname
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="Surname..." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="email" placeholder="Email..." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formUsername">
                <Form.Label column sm={2}>
                    Username:
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="Username..." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="password" placeholder="Password..." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 8, offset: 2 }}>
                    <Button variant="dark" type="submit">Register</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default RegisterForm;