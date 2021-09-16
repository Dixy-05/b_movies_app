import React from 'react';
import './App.css';
import AppNavbar from './modules/navbar';
import AppNavs from './modules/navs';
import { Switch, Route } from 'react-router-dom';
import Home from './modules/home';
import Users from './modules/users';
import Movies from './modules/movies';
import Subscriptions from './modules/subscriptions';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <div className="App">
        <AppNavs />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/subscriptions">
            <Subscriptions />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

// email: mani@gmail.com password: Mal2345To45
