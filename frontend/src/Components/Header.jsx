import { Navbar, Nav, Container, Form, FormControl, Button, FormLabel, NavDropdown } from 'react-bootstrap';

const Header = ({ loggedIn, username, setLoggedIn }) => {

    let nav;

    const handleClick = () => {
        localStorage.removeItem(`user`);
        setLoggedIn(false);
    }

    if (loggedIn) {
        nav = (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Chitter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Text>
                                Signed in as: @{username}
                            </Navbar.Text>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">View Peeps</Nav.Link>
                            <Nav.Link href="/addPeep">
                                Add Peep
                            </Nav.Link>
                            <Nav.Link onClick={handleClick}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        nav = <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Chitter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/">View Peeps</Nav.Link>
                        <Nav.Link href="/register">
                            Register
                        </Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
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