import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Modal,
  Button,
  NavDropdown,
  Form,
} from 'react-bootstrap';
import { Film } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import adminUsersService from '../services/adminUsersService';
import {
  signUpEmail,
  signUpPassword,
  adminAccount,
  isLoggedIn,
} from '../actions/adminUser_actions';

const AppNavbar = () => {
  const adminUsers = useSelector((state) => state.adminUsers);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    adminUsers.loggedIn === false && setShow(true);
  };

  const handleSignUp = () => {
    adminUsersService.createAdminUser();
    handleClose();
  };

  const handleLogout = () => {
    dispatch(isLoggedIn(false));
    localStorage.removeItem('tk');
    dispatch(adminAccount(''));
    adminUsersService.stopTimeOut();
  };

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/" className="ms-5" href="#home">
          <Film color="white" className="me-1" />
          Best-Movies.com/Admin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container me="auto" className="me-5">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleShow}>
                {adminUsers.loggedIn === false ? (
                  <span>Create-Account</span>
                ) : null}
              </Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {adminUsers.adminUserAccount}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
                  {adminUsers.loggedIn ? (
                    <span>Log-Out</span>
                  ) : (
                    <span>Not LoggedIn</span>
                  )}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SING UP MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form id="SignUp-Form">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={adminUsers.registerEmail}
                placeholder="Enter email"
                onChange={(e) => dispatch(signUpEmail(e.target.value))}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={adminUsers.registerPassword}
                placeholder="Password"
                onChange={(e) => dispatch(signUpPassword(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSignUp}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default AppNavbar;
