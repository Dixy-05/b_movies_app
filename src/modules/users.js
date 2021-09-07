import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const Users = (props) => {
  const [show, setShow] = useState(false);

  const deleteUser = (e) => {
    props.delete(e);
    setShow(false);
  };

  return (
    <React.Fragment>
      <Container>
        <Form id="Register-Form">
          <h1>Register User</h1>
          <Form.Group className="mb-3" controlId="register-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              // id="register-email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="register-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              // id="register-password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={props.register}>
            Submit
          </Button>
        </Form>
      </Container>
      <hr />
      <Container>
        <Form id="Login-Form">
          <h1>Login User</h1>
          <Form.Group className="mb-3" controlId="login-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="login-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={props.login}>
            Submit
          </Button>
        </Form>
      </Container>
      <hr />
      <Container>
        <Form id="Delete-Form">
          <h1>Delete User</h1>
          <Form.Group className="mb-3" controlId="delete-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Alert show={show} variant="light">
            <Alert.Heading>Are you sure you want to delete user?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                type="submit"
                onClick={(e) => deleteUser(e)}
                variant="outline-danger"
              >
                Yes
              </Button>
              <Button
                className="ms-2"
                onClick={() => setShow(false)}
                variant="outline-primary"
              >
                No
              </Button>
            </div>
          </Alert>
          <Button type="button" variant="danger" onClick={() => setShow(true)}>
            Delete
          </Button>
        </Form>
      </Container>
      <Container></Container>
    </React.Fragment>
  );
};

export default Users;
