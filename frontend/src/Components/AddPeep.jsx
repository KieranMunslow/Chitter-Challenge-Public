import { Form, Row, Col, Button } from 'react-bootstrap';

const AddPeep = () => {

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formMessage">
                <Form.Label column sm={2}>
                    Message:
                </Form.Label>
                <Col sm={9}>
                    <Form.Control as="textarea" style={{ height: '100px' }} type="text" placeholder="Enter your message here..." />
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