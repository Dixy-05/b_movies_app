import React from 'react';
import Nav from 'react-bootstrap/nav';

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
            onClick={(e) => {
              e.preventDefault();
            }}
            eventKey="users"
            id="unique"
            href="/home"
          >
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="movies">Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="subscriptions">Subscriptions</Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  );
};

export default appTabs;
