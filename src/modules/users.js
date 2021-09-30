import React, { useEffect, useState } from 'react';
import {
  Form,
  Button,
  Container,
  Alert,
  Card,
  CloseButton,
} from 'react-bootstrap';
import {
  registerEmail,
  registerPassword,
  findUser,
  deleteUser,
} from '../actions/users_actions';
import { useDispatch, useSelector } from 'react-redux';
import usersService from '../services/usersServices';
import { tokenExpiration } from '../utils/tokenTimeout';

const Users = (props) => {
  // useEffect(() => handleToken(), []);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const [showFind, setShowFind] = useState(false);

  const removeUser = () => {
    usersService.deleteUser();
    setShowDelete(false);
  };
  const deleteButton = () => {
    if (users.deleteEmail) {
      setShowDelete(true);
    } else {
      alert('Input fiel must have an Email to delete User');
    }
  };
  const handleFind = async () => {
    console.log('users state:', users.userInfo);
    console.log('handle Find:', await users.userInfo.email);
    if (users.findEmail === '') {
      alert('Input field must have an Email');
      return;
    }
    usersService.getUser();
    users.findEmail !== '' && setShowFind(true);
    setTimeout(() => {
      users.userInfo.email === '' && setShowFind(false);
    }, 500);
  };
  const handleKeyPress = (e) => {
    if (e.which === 13) e.preventDefault();
  };
  // const handleToken = async () => {
  //   setTimeout(() => {
  //     localStorage.removeItem('tk');
  //   }, 5000);
  // const expiration = await tokenExpiration();
  // return expiration;
  // };

  return (
    <React.Fragment>
      {/* <button onClick={handleToken}>test TokenExpiration</button> */}

      <Container>
        <Form id="Register-Form">
          <h1>Create User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={users.registerEmail}
              placeholder="Enter email"
              onChange={(e) => dispatch(registerEmail(e.target.value))}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={users.registerPassword}
              placeholder="Password"
              onChange={(e) => dispatch(registerPassword(e.target.value))}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={usersService.createUser}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <hr />
      <Container>
        <Form id="Find-Form">
          <h1>Find User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
              onChange={(e) => dispatch(findUser(e.target.value))}
              onKeyPress={(e) => handleKeyPress(e)}
              value={users.findEmail}
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Button type="button" variant="primary" onClick={handleFind}>
            Find
          </Button>
        </Form>
        <Card
          style={{
            width: '30rem',
            display: showFind ? 'block' : 'none',
            marginTop: '1em',
          }}
        >
          <Card.Body>
            <p className="d-flex justify-content-end ">
              {' '}
              <CloseButton onClick={() => setShowFind(false)} />
            </p>
            <Card.Title>User Data</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <b className="ms-3">{users.userInfo.email}</b>
            </Card.Subtitle>
            {/* <Card.Text> */}
            <ul>
              <li>
                <b className="me-2">User id:</b>
                {users.userInfo.id}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {users.userInfo.created_at}
              </li>
            </ul>
            {/* </Card.Text> */}
          </Card.Body>
        </Card>
      </Container>

      <hr />
      <Container className="mb-5">
        <Form id="Delete-Form">
          <h1>Delete User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
              onChange={(e) => dispatch(deleteUser(e.target.value))}
              onKeyPress={(e) => handleKeyPress(e)}
              value={users.deleteEmail}
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Alert show={showDelete} variant="light">
            <Alert.Heading>Are you sure you want to delete user?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                type="button"
                onClick={removeUser}
                variant="outline-danger"
              >
                Yes
              </Button>
              <Button
                className="ms-2"
                onClick={() => setShowDelete(false)}
                variant="outline-primary"
              >
                No
              </Button>
            </div>
          </Alert>
          <Button type="button" variant="danger" onClick={deleteButton}>
            Delete
          </Button>
        </Form>
      </Container>
      <hr />
    </React.Fragment>
  );
};

export default Users;
