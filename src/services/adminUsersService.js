import {
  signUpEmail,
  signUpPassword,
  logInEmail,
  logInPassword,
  adminAccount,
  isLoggedIn,
} from '../actions/adminUser_actions';
import { store } from '../stores/store';

const { post } = require('../utils/api');
const getStore = async () => {
  const state = await store.getState().adminUsers;
  return state;
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
      console.log('newUser:', newUser);
      if (newUser.token) {
        store.dispatch(isLoggedIn(true));
      }
      localStorage.setItem('tk', newUser.token);
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
      if (user.token) {
        store.dispatch(isLoggedIn(true));
      }
      localStorage.setItem('tk', user.token);
      store.dispatch(adminAccount(user.account));
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(logInEmail(''));
    store.dispatch(logInPassword(''));
  }
}

export default new AdminUserService();
