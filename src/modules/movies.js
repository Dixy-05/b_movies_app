import React from 'react';
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  CloseButton,
  Alert,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMovie,
  findMovie,
  updateMovie,
  storeMovieId,
  delete_movie,
} from '../actions/movies_actions';
import movieService from '../services/moviesService';
import { useState } from 'react';

const Movies = (props) => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleAddMovie = () => {
    movieService.addNewMovie();
    console.log('redux State', movies);
  };
  const handleUpdateMovie = () => {
    if (movies.movieId === '') {
      alert('Must give a movie Id');
      return;
    }
    if (Object.entries(movies.updateMovie).length === 0) {
      alert('One or more of the input fields must have data to update');
      return;
    }
    movieService.updateMovie();
    console.log('redux State', movies.updateMovie);
  };
  const handleFindMovie = async () => {
    if (movies.findMovieTitle === '') {
      alert('Input fiel must have a movie title');
      return;
    }
    const movie = await movieService.findMovie();
    movies.findMovieTitle !== '' && setShow(true);
    !movie && setShow(false);
  };

  const handleRemoveMovie = () => {
    movieService.deleteMovie();
    setShowDelete(false);
  };
  const handleDeleteButton = () => {
    if (movies.deleteMovieId === '') {
      alert('Must enter a movie Id');
      return;
    }
    setShowDelete(true);
  };
  const handleKeyPress = (e) => {
    if (e.which === 13) e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Form id="addMovie-Form">
          <h1>Add Movie</h1>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.addMovie.movieTitle}
                  placeholder="Enter title"
                  onChange={(e) =>
                    dispatch(addMovie(e.target.value, 'movieTitle'))
                  }
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Genre</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.addMovie.movieGenre}
                  placeholder="Enter genre"
                  onChange={(e) =>
                    dispatch(addMovie(e.target.value, 'movieGenre'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Year</Form.Label>
                <Form.Control
                  placeholder="Enter year"
                  type="number"
                  value={movies.addMovie.movieYear}
                  onChange={(e) =>
                    dispatch(addMovie(e.target.value, 'movieYear'))
                  }
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Length</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.addMovie.movieLength}
                  placeholder="Enter time e.g. 02:30:00"
                  onChange={(e) =>
                    dispatch(addMovie(e.target.value, 'movieLength'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="button" onClick={handleAddMovie}>
            Add
          </Button>
        </Form>
      </Container>
      <hr />

      <Container>
        <Form id="FindMovie-Form">
          <h1>Find Movie</h1>
          <Form.Group className="mb-3">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Enter movie title"
              onKeyPress={(e) => handleKeyPress(e)}
              onChange={(e) => dispatch(findMovie(e.target.value))}
              value={movies.findMovieTitle}
            />
          </Form.Group>
          <Button type="button" variant="primary" onClick={handleFindMovie}>
            Find
          </Button>
        </Form>
        <Card
          style={{
            width: '30rem',
            display: show ? 'block' : 'none',
            marginTop: '1em',
          }}
        >
          <Card.Body>
            <p className="d-flex justify-content-end ">
              {' '}
              <CloseButton onClick={() => setShow(false)} />
            </p>

            <Card.Title>Movie</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <b className="ms-3">{movies.movieData.title}</b>
            </Card.Subtitle>
            <ul>
              <li>
                <b className="me-2">Id: </b>
                {movies.movieData.id}
              </li>
              <li>
                <b className="me-2">Genre: </b>
                {movies.movieData.genre}
              </li>
              <li>
                <b className="me-2">Year:</b>
                {movies.movieData.year}
              </li>
              <li>
                <b className="me-2">Length:</b>
                {movies.movieData.movie_length}
              </li>
              <li>
                <b className="me-2">Creation date:</b>
                {movies.movieData.created_at}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>

      <hr />
      <Container>
        <Form id="update-Form">
          <h1>Update Movie</h1>
          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Id</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.movieId}
                  placeholder="Enter Id"
                  onChange={(e) => dispatch(storeMovieId(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.updateMovie.title && movies.updateMovie.title}
                  placeholder="Enter title"
                  onChange={(e) =>
                    dispatch(updateMovie(e.target.value, 'title'))
                  }
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Movie Genre</Form.Label>
                <Form.Control
                  type="text"
                  value={movies.updateMovie.genre && movies.updateMovie.genre}
                  placeholder="Enter genre"
                  onChange={(e) =>
                    dispatch(updateMovie(e.target.value, 'genre'))
                  }
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
                  placeholder="Enter year"
                  value={movies.updateMovie.year && movies.updateMovie.year}
                  onChange={(e) =>
                    dispatch(updateMovie(e.target.value, 'year'))
                  }
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Movie Length</Form.Label>
                <Form.Control
                  type="text"
                  value={
                    movies.updateMovie.movieLength &&
                    movies.updateMovie.movieLength
                  }
                  placeholder="Enter time e.g. 02:30:00"
                  onChange={(e) =>
                    dispatch(updateMovie(e.target.value, 'movieLength'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="button" onClick={handleUpdateMovie}>
            Update
          </Button>
        </Form>
      </Container>
      <hr />
      <Container className="mb-5">
        <Form id="DeleteMovie-Form">
          <h1>Delete Movie</h1>
          <Form.Group className="mb-3">
            <Form.Label>Movie Id</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter movie Id"
              onKeyPress={(e) => handleKeyPress(e)}
              onChange={(e) => dispatch(delete_movie(e.target.value))}
              value={movies.deleteMovieId}
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Alert show={showDelete} variant="light">
            <Alert.Heading>Are you sure you want to delete user?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                type="button"
                onClick={handleRemoveMovie}
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
          <Button type="button" variant="danger" onClick={handleDeleteButton}>
            Delete
          </Button>
        </Form>
      </Container>
      <hr />
    </div>
  );
};

export default Movies;
