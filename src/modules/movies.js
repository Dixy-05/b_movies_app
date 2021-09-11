import React from 'react';
import { useState } from 'react';
import {
  Form,
  Button,
  Container,
  Alert,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

const Movies = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showFind, setShowFind] = useState(false);

  const deleteUser = () => {
    props.delete();
    setShowDelete(false);
  };
  const handleFind = () => {
    props.findUser();
    props.email && setShowFind(true);
  };

  return (
    <div>
      <Container>
        <Form id="Register-Form">
          <h1>Add Movies</h1>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  type="text"
                  value={props.name}
                  placeholder="Enter title"
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Genre</Form.Label>
                <Form.Control
                  type="text"
                  value={props.name}
                  placeholder="Enter genre"
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Year</Form.Label>
                <Form.Control
                  type="number"
                  value={props.name}
                  placeholder="Enter year"
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Length</Form.Label>
                <Form.Control
                  type="text"
                  value={props.name}
                  placeholder="Enter time"
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="button" onClick={props.register}>
            Add
          </Button>
        </Form>
      </Container>
      <hr />

      <Container>
        <Form id="Find-Form">
          <h1>Find Movie</h1>
          <Form.Group className="mb-3">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Enter movie title"
              onChange={(e) => props.setEmail(e.target.value)}
              value={props.movie}
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
            <Card.Title>Movie Data</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* <b className="ms-3">{props.movieInfo.email}</b> */}
            </Card.Subtitle>
            <ul>
              <li>
                <b className="me-2">User id:</b>
                {/* {props.movieInfo.id} */}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {/* {props.movieInfo.title} */}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {/* {props.movieInfo.genre} */}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {/* {props.movieInfo.year} */}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {/* {props.movieInfo.movie_length} */}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>

      {/* <hr />

      <Container>
        <Form id="Login-Form">
          <h1>Login User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={props.email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={props.password}
              type="password"
              placeholder="Password"
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={props.login}>
            Submit
          </Button>
        </Form>
      </Container>
      <hr /> */}

      {/* <hr />
      <Container>
        <Form id="Delete-Form">
          <h1>Delete User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
              onChange={(e) => props.setEmail(e.target.value)}
              value={props.email}
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Alert show={showDelete} variant="light">
            <Alert.Heading>Are you sure you want to delete user?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                type="button"
                onClick={deleteUser}
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
          <Button
            type="button"
            variant="danger"
            onClick={() => setShowDelete(true)}
          >
            Delete
          </Button>
        </Form>
      </Container> */}
    </div>
  );
};

export default Movies;
