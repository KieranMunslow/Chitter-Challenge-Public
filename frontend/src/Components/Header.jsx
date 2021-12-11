import { Navbar, Nav, Container, Form, FormControl, Button, FormLabel, NavDropdown } from 'react-bootstrap';

const Header = ({ loggedIn, username }) => {

    let nav;

    if (loggedIn) {
        nav = (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Chitter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Text>
                                Signed in as: @{username}
                            </Navbar.Text>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">View Peeps</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Add Peep
                            </Nav.Link>
                            <Nav.Link>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        nav = <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Chitter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#deets">View Peeps</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Register
                        </Nav.Link>
                        <Nav.Link>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }

    return (
        <>
            {nav}
        </>
    )
}

export default Header;