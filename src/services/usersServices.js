import {
  registerEmail,
  registerPassword,
  loginEmail,
  loginPassword,
  findUser,
  deleteUser,
  userInfo,
} from '../actions/users_actions';
import { store } from '../stores/store';

const { get, post, del } = require('../utils/api');
const getStore = async () => {
  const state = await store.getState();
  return state;
};
class UserService {
  async createUser() {
    const appStore = await getStore();
    try {
      const newUser = await post(
        '/api/register',
        JSON.stringify({
          email: appStore.users.registerEmail,
          password: appStore.users.registerPassword,
        })
      );
      if (newUser.error) {
        throw newUser.error;
      }
      console.log('newUser:', newUser);
      localStorage.setItem('tk', newUser.token);
      alert('User Successfuly created!!');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(registerEmail(''));
    store.dispatch(registerPassword(''));
  }
  async loginUser() {
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
    store.dispatch(loginEmail(''));
    store.dispatch(loginPassword(''));
  }
  async getUser() {
    const appStore = await getStore();
    if (appStore.users.findEmail) {
      try {
        const user = await get(`/api/users/${appStore.users.findEmail}`);
        if (user.error) {
          throw user.error;
        }
        console.log('getUser:', user);
        store.dispatch(userInfo(user.user));
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Input fiel must have an Email to find User');
    }
    store.dispatch(findUser(''));
  }
  async deleteUser() {
    const appStore = await getStore();
    try {
      const user = await del(`/api/users/${appStore.users.deleteEmail}`);
      if (user.error) {
        throw user.error;
      }
      alert('User Successfuly deleted!!');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(deleteUser(''));
  }
}

export default new UserService();
