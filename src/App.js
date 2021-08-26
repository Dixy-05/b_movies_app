import React from 'react';
import './App.css';
import AppNavbar from './modules/navbar';
import AppNavs from './modules/navs';
import Users from './modules/users';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <div className="App">
        <AppNavs />
        <Users />
      </div>
    </React.Fragment>
  );
}

export default App;
