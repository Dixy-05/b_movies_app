import React from 'react';
import Nav from 'react-bootstrap/nav';
import { Link } from 'react-router-dom';

const appTabs = () => {
  return (
    <React.Fragment>
      <Nav
        id="appNavs"
        variant="tabs"
        activeKey="/users"
        onSelect={(selectedKey) => {
          console.log(selectedKey);
        }}
      >
        <Nav.Item>
          <Nav.Link
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
          <Nav.Link as={Link} to="/movies" eventKey="movies">
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/subscriptions" eventKey="subscriptions">
            Subscriptions
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  );
};

export default appTabs;
