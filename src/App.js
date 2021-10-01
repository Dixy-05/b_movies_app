import React from 'react';
import './App.css';
import AppNavbar from './modules/navbar';
import AppNavs from './modules/navs';
import { Switch } from 'react-router-dom';
import Home from './modules/home';
import Users from './modules/users';
import Movies from './modules/movies';
import Subscriptions from './modules/subscriptions';
import AuthRoute from './utils/authRoute';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <div className="App">
        <AppNavs />
        <Switch>
          <AuthRoute exact path="/" type="guest">
            <Home />
          </AuthRoute>
          <AuthRoute path="/users" type="private">
            <Users />
          </AuthRoute>
          <AuthRoute path="/movies" type="private">
            <Movies />
          </AuthRoute>
          <AuthRoute path="/subscriptions" type="private">
            <Subscriptions />
          </AuthRoute>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
