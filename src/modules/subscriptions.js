import React from 'react';
import {
  add_Subscription,
  findSubscription,
  storeSubscription,
  update_Subscription,
  storeSubscription_id,
  reset_update_subscription,
  store_delete_id,
} from '../actions/subscriptions_actions';
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
import { connect } from 'react-redux';
import { useState } from 'react';
import subscriptionService from '../services/subscriptionService';

const Subscriptions = (props) => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const {
    addSubscription,
    subscriptionData,
    subscriptionType,
    updateSubscription,
    subscriptionId,
    deleteId,
    dispatch,
  } = props;

  const handleAddSubscription = () => {
    subscriptionService.addSubscription();
  };
  const handleFindSubscription = async () => {
    if (subscriptionType === '') {
      alert('Input field must have a valid subscription type');
      return;
    }
    const subscription = await subscriptionService.findSubscription();
    subscription && setShow(true);
    !subscription && setShow(false);
  };
  const handleUpdateSubscription = () => {
    if (subscriptionId === '') {
      alert('No subscription Id was given');
      return;
    }
    if (Object.entries(updateSubscription).length === 0) {
      alert('One or more of the input fields must have data to update');
      return;
    }
    subscriptionService.updateSubscription();
  };

  const handleDeleteButton = () => {
    if (deleteId === '') {
      alert('Must provide a subscription id');
      return;
    }
    setShowDelete(true);
  };
  const handleRemoveSubscription = () => {
    subscriptionService.deleteSubscription();
    setShowDelete(false);
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) e.preventDefault();
  };
  return (
    <React.Fragment>
      <Container>
        <Form id="addMovie-Form">
          <h1>Add Subscription</h1>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Subscription Type</Form.Label>
                <Form.Control
                  type="text"
                  value={addSubscription.type}
                  placeholder="Enter subscription name"
                  onChange={(e) =>
                    dispatch(add_Subscription(e.target.value, 'type'))
                  }
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Detail</Form.Label>
                <Form.Control
                  type="text"
                  value={addSubscription.detail}
                  placeholder="Enter detail"
                  onChange={(e) =>
                    dispatch(add_Subscription(e.target.value, 'detail'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Months</Form.Label>
                <Form.Control
                  placeholder="Enter a number"
                  type="number"
                  value={addSubscription.months}
                  onChange={(e) =>
                    dispatch(add_Subscription(e.target.value, 'months'))
                  }
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={addSubscription.price}
                  placeholder="Enter number"
                  onChange={(e) =>
                    dispatch(add_Subscription(e.target.value, 'price'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            type="button"
            onClick={handleAddSubscription}
          >
            Add
          </Button>
        </Form>
      </Container>
      <hr />
      <Container>
        <Form id="FindSubscription-Form">
          <h1>Find Subscription</h1>
          <Form.Group className="mb-3">
            <Form.Label>Subscription Type</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Enter subscription type"
              onChange={(e) => dispatch(findSubscription(e.target.value))}
              onKeyPress={(e) => handleKeyPress(e)}
              value={subscriptionType}
            />
          </Form.Group>
          <Button
            type="button"
            variant="primary"
            onClick={handleFindSubscription}
          >
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

            <Card.Title>Subscription</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <b className="ms-3">{subscriptionData.type}</b>
            </Card.Subtitle>
            <ul>
              <li>
                <b className="me-2">id: </b>
                {subscriptionData.id}
              </li>
              <li>
                <b className="me-2">Detail: </b>
                {subscriptionData.detail}
              </li>
              <li>
                <b className="me-2">Months: </b>
                {subscriptionData.months}
              </li>
              <li>
                <b className="me-2">Price:</b>
                {subscriptionData.price}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
      <hr />
      <Container>
        <Form id="updateSubscription-Form">
          <h1>Update Subscription</h1>
          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Subscription Id</Form.Label>
                <Form.Control
                  type="text"
                  value={subscriptionId}
                  placeholder="Enter Id"
                  onChange={(e) =>
                    dispatch(storeSubscription_id(e.target.value))
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Subscription type</Form.Label>
                <Form.Control
                  type="text"
                  value={updateSubscription.type}
                  placeholder="Enter subscription type"
                  onChange={(e) =>
                    dispatch(update_Subscription(e.target.value, 'type'))
                  }
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Detail</Form.Label>
                <Form.Control
                  type="text"
                  value={updateSubscription.detail}
                  placeholder="Enter detail"
                  onChange={(e) =>
                    dispatch(update_Subscription(e.target.value, 'detail'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Months</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={updateSubscription.months}
                  onChange={(e) =>
                    dispatch(update_Subscription(e.target.value, 'months'))
                  }
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={updateSubscription.price}
                  placeholder="Enter number"
                  onChange={(e) =>
                    dispatch(update_Subscription(e.target.value, 'price'))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            type="button"
            onClick={handleUpdateSubscription}
          >
            Update
          </Button>
        </Form>
      </Container>
      <hr />
      <Container className="mb-5">
        <Form id="DeleteSubscription-Form">
          <h1>Delete Subscription</h1>
          <Form.Group className="mb-3">
            <Form.Label>Subscription Id</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Enter id"
              onChange={(e) => dispatch(store_delete_id(e.target.value))}
              value={deleteId}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <Form.Text id="warning" className="text-muted"></Form.Text>
          </Form.Group>
          <Alert show={showDelete} variant="light">
            <Alert.Heading>Are you sure you want to delete user?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                type="button"
                onClick={handleRemoveSubscription}
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    addSubscription: state.subscriptions.addSubscription,
    subscriptionType: state.subscriptions.subscriptionType,
    subscriptionData: state.subscriptions.subscriptionData,
    updateSubscription: state.subscriptions.updateSubscription,
    subscriptionId: state.subscriptions.subscriptionId,
    deleteId: state.subscriptions.deleteId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
