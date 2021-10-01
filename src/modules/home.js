import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { logInEmail, logInPassword } from '../actions/adminUser_actions';
import { useDispatch, useSelector } from 'react-redux';
import adminUsersService from '../services/adminUsersService';
const Home = () => {
  const adminUsers = useSelector((state) => state.adminUsers);
  const dispatch = useDispatch();

  if (adminUsers.loggedIn) {
    return <div></div>;
  }
  return (
    <div>
      <h2 className="mt-3 ms-3">Best-Movies/admin </h2>
      <div>
        <Container className="d-flex justify-content-center mt-5">
          <Form>
            <h1>Log In</h1>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={adminUsers.logInEmail}
                placeholder="Enter email"
                onChange={(e) => dispatch(logInEmail(e.target.value))}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={adminUsers.logInPassword}
                placeholder="Password"
                onChange={(e) => dispatch(logInPassword(e.target.value))}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={adminUsersService.loginAdminUser}
            >
              submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Home;
