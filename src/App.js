import React, { useState } from 'react';
import './App.css';
import AppNavbar from './modules/navbar';
import AppNavs from './modules/navs';
import Users from './modules/users';
import { Switch, Route } from 'react-router-dom';
import Movies from './modules/movies';
import Subscriptions from './modules/subscriptions';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerEmail,
  registerPassword,
  loginEmail,
  loginPassword,
  findUser,
  deleteUser,
  userInfo,
} from './actions/users_actions';

function App() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [userInfo, setUserInfo] = useState({});

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleRegister = async () => {
    console.log(
      'email:',
      users.registerEmail,
      'password:',
      users.registerPassword
    );
    // try {
    //   const addedUser = await fetch('http://localhost:8081/api/register', {
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     // withCredentials: true,
    //     cache: 'no-cache',
    //     mode: 'cors',
    //     headers: {
    //       'content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: users.registerEmail,
    //       password: users.registerPassword,
    //     }),
    //   });

    //   const resJson = await addedUser.json();
    //   console.log(resJson);
    // } catch (error) {
    //   console.log(error);
    // }

    // dispatch(registerEmail(''));
    // dispatch(registerPassword(''));
  };

  const handleLogin = async () => {
    try {
      const loggedUser = await fetch('http://localhost:8081/api/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          Accept: 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify({
          email: users.loginEmail,
          password: users.loginPassword,
        }),
      });
      const resJson = await loggedUser.json();
      console.log(resJson);
      localStorage.setItem('t', resJson.token);
    } catch (error) {
      console.log(error);
    }
    dispatch(loginEmail(''));
    dispatch(loginPassword(''));
  };

  const handleDelete = async () => {
    try {
      const deletedUser = await fetch(
        `http://localhost:8081/api/users/${
          users.deleteEmail ? users.deleteEmail : 'no input'
        }`,
        {
          method: 'DELETE',
          headers: {
            'content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const resJson = await deletedUser.json();
      if (resJson.error) {
        throw resJson.error;
      }
      console.log(resJson);
      alert(`User ${users.deleteEmail} was successfully deleted`);
    } catch (err) {
      console.log(err);
      alert(err);
    }
    dispatch(deleteUser(''));
  };

  const handleFindUser = async () => {
    try {
      const findUser = await fetch(
        `http://localhost:8081/api/users/${
          users.findEmail ? users.findEmail : 'no input'
        }`,
        {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('t')} `,
          },
        }
      );
      const resJson = await findUser.json();
      dispatch(userInfo(resJson.user));
    } catch (error) {
      console.log(error);
    }
    dispatch(findUser(''));
  };
  return (
    <React.Fragment>
      <AppNavbar />
      <div className="App">
        <AppNavs />
        <Switch>
          <Route exact path="/">
            <Users
              login={handleLogin}
              register={handleRegister}
              delete={handleDelete}
              findUser={handleFindUser}
              userInfo={userInfo}
            />
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
