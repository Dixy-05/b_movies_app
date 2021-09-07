import React from 'react';
import './App.css';
import AppNavbar from './modules/navbar';
import AppNavs from './modules/navs';
import Users from './modules/users';

function App() {
  const handleRegister = () => {
    const registerForm = document.querySelector('#Register-Form');
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('email:', email, 'password:', password);
      fetch('http://localhost:8081/api/register', {
        method: 'POST',
        credentials: 'same-origin',
        // withCredentials: true,
        cache: 'no-cache',
        mode: 'cors',
        headers: {
          'content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log('the return', json);
          json && alert(`User was succesfully registered`);
        })
        .catch((err) => console.log(err));
    });
    registerForm['register-email'].value = '';
    registerForm['register-password'].value = '';
  };
  const handleLogin = () => {
    const loginForm = document.querySelector('#Login-Form');
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch('http://localhost:8081/api/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          Accept: 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(async (res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    });
    loginForm['login-email'].value = '';
    loginForm['login-password'].value = '';
  };

  const handleDelete = () => {
    const deleteForm = document.querySelector('#Delete-Form');
    const email = deleteForm['delete-email'].value;
    console.log('EMAIL-INPUT:', email);
    deleteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (email) {
        document.querySelector('#warning').innerHTML = '';
        try {
          const deleteUser = await fetch(
            `http://localhost:8081/api/users/${email}`,
            {
              method: 'DELETE',
              headers: {
                'content-Type': 'application/json',
                Accept: 'application/json',
              },
            }
          );
          const resJson = await deleteUser.json();
          console.log(resJson);
        } catch (err) {
          console.log(err);
        }
        deleteForm.reset();
      } else {
        document.querySelector('#warning').innerHTML =
          'You must enter a valid email !!';
        alert('You must enter e valid email !!');
      }
    });
  };
  return (
    <React.Fragment>
      <AppNavbar />
      <div className="App">
        <AppNavs />
        <Users
          login={handleLogin}
          register={handleRegister}
          delete={handleDelete}
        />
      </div>
      {/* <div>
        <form>
          <label>
            Choose date:<input type="date"></input>
          </label>
        </form>
        <button onClick={doThis} id="date">
          fetch
        </button>
      </div> */}
    </React.Fragment>
  );
}

export default App;

// email: mani@gmail.com password: Mal2345To45
