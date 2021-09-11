import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Film } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const appNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/" className="ms-5" href="#home">
        <Film color="white" className="me-1" />
        Best-Movies.com/Admin
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container me="auto">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Create-Account</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Your_account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log-In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log-Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default appNavbar;
