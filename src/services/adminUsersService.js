import {
  signUpEmail,
  signUpPassword,
  logInEmail,
  logInPassword,
  adminAccount,
  isLoggedIn,
} from '../actions/adminUser_actions';
import { store } from '../stores/store';
import jwtDecode from 'jwt-decode';
const { post } = require('../utils/api');

let timeOut;
const tokenExpiration = async () => {
  let token = await localStorage.getItem('tk');
  const { exp } = await jwtDecode(token);
  const expirationTime = exp * 1000 - Date.now();
  timeOut = setTimeout(() => {
    store.dispatch(isLoggedIn(false));
    store.dispatch(adminAccount(''));
    localStorage.removeItem('tk');
    alert('Your token has expired you must re-loggIn');
  }, expirationTime);
};

class AdminUserService {
  appState = () => store.getState().adminUsers;
  createAdminUser = async () => {
    try {
      const newUser = await post(
        '/api/register',
        JSON.stringify({
          email: this.appState().signUpEmail,
          password: this.appState().signUpPassword,
        })
      );
      if (newUser.error) {
        throw newUser.error;
      }
      localStorage.setItem('tk', newUser.token);
      if (newUser.token) {
        store.dispatch(isLoggedIn(true));
        tokenExpiration();
      }

      store.dispatch(adminAccount(newUser.account));
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(signUpEmail(''));
    store.dispatch(signUpPassword(''));
  };
  loginAdminUser = async () => {
    try {
      const user = await post(
        '/api/login',
        JSON.stringify({
          email: this.appState().logInEmail,
          password: this.appState().logInPassword,
        })
      );
      console.log('user from adminUserService:', user);
      if (user.error) {
        throw user.error;
      }
      localStorage.setItem('tk', user.token);
      if (user.token) {
        store.dispatch(isLoggedIn(true));
        tokenExpiration();
      }
      store.dispatch(adminAccount(user.account));
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(logInEmail(''));
    store.dispatch(logInPassword(''));
  };
  stopTimeOut() {
    clearTimeout(timeOut);
  }
}

export default new AdminUserService();
