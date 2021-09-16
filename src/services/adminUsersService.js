import {
  signUpEmail,
  signUpPassword,
  logInEmail,
  logInPassword,
  adminAccount,
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
      localStorage.setItem('tk', newUser.token);
      store.dispatch(adminAccount(newUser.account));
      alert('User Successfuly created!!');
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
          email: appStore.users.loginEmail,
          password: appStore.users.loginPassword,
        })
      );
      if (user.error) {
        throw user.error;
      }
      localStorage.setItem('tk', user.token);
      alert('User Successfuly logged!!');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(logInEmail(''));
    store.dispatch(logInPassword(''));
  }
}

export default new AdminUserService();
