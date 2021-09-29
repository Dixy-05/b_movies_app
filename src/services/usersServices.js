import {
  registerEmail,
  registerPassword,
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
        '/api/users',
        JSON.stringify({
          email: appStore.users.registerEmail,
          password: appStore.users.registerPassword,
        })
      );
      if (newUser.error) {
        throw newUser.error;
      }
      alert(`User ${newUser.user[0].email} Successfuly created!!`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(registerEmail(''));
    store.dispatch(registerPassword(''));
  }
  async getUser() {
    const appStore = await getStore();
    try {
      const user = await get(`/api/users/${appStore.users.findEmail}`);
      if (user.error) {
        throw user.error;
      }
      store.dispatch(userInfo(user.user));
    } catch (error) {
      console.log(error);
      store.dispatch(userInfo({ id: '', email: '', created_at: '' }));
      alert(error);
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
