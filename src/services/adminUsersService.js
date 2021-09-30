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
const getStore = async () => {
  const state = await store.getState().adminUsers;
  return state;
};

let timeOut;
const tokenExpiration = async () => {
  console.log('clearTimeout:', store.getState().adminUsers.clearTimeout);
  let token = await localStorage.getItem('tk');
  const { exp } = await jwtDecode(token);
  const expirationTime = exp * 1000 - Date.now();
  timeOut = setTimeout(() => {
    console.log('clearTimeout:', store.getState().adminUsers.clearTimeout);
    store.dispatch(isLoggedIn(false));
    store.dispatch(adminAccount(''));
    localStorage.removeItem('tk');
    alert('Your token has expired you must re-loggIn');
  }, expirationTime);
};

class AdminUserService {
  async createAdminUser() {
    const appStore = await getStore();
    try {
      const newUser = await post(
        '/api/register',
        JSON.stringify({
          email: appStore.signUpEmail,
          password: appStore.signUpPassword,
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
  }
  async loginAdminUser() {
    const appStore = await getStore();
    try {
      const user = await post(
        '/api/login',
        JSON.stringify({
          email: appStore.logInEmail,
          password: appStore.logInPassword,
        })
      );
      if (user.error) {
        throw user.error;
      }

      localStorage.setItem('tk', user.token);
      if (user.token) {
        store.dispatch(isLoggedIn(true));
        tokenExpiration();
      }
      console.log('login account:', user.account);
      store.dispatch(adminAccount(user.account));
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(logInEmail(''));
    store.dispatch(logInPassword(''));
  }
  stopTimeOut() {
    clearTimeout(timeOut);
  }
}

export default new AdminUserService();
