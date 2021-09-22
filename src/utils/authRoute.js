import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
  console.log('authRoute:', props);
  const { loggedIn, type } = props;
  if (type === 'guest' && loggedIn) return <Redirect to="/users" />;
  // else if (type === 'private' && !loggedIn) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...props} />;
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.adminUsers.loggedIn,
  };
};

export default connect(mapStateToProps)(AuthRoute);
