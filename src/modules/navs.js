import React from 'react';
import Nav from 'react-bootstrap/nav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppTabs = () => {
  const auth = useSelector((state) => state.adminUsers);
  const handleAlert = () => {
    if (auth.loggedIn === false) {
      alert('You are not logged In');
    }
  };
  if (!auth.loggedIn) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      <Nav id="appNavs" variant="tabs" activeKey="/users">
        <Nav.Item>
          <Nav.Link
            onClick={handleAlert}
            as={Link}
            to="/users"
            eventKey="users"
            id="unique"
            href="/home"
          >
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={handleAlert}
            as={Link}
            to="/movies"
            eventKey="movies"
          >
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/subscriptions"
            eventKey="subscriptions"
            onClick={handleAlert}
          >
            Subscriptions
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  );
};

export default AppTabs;
