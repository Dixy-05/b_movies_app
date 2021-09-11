import {
  registerEmail,
  registerPassword,
  //   loginEmail,
  //   loginPassword,
  //   findUser,
  //   deleteUser,
  //   userInfo,
} from '../actions/users_actions';
import { store } from '../stores/store';

const { post } = require('../utils/api');
// const getState = () => {
//   const state = store.getState();
//   return state;
// };
const getStore = async () => {
  const state = await store.getState();
  return state;
};
class UserService {
  async createUser(user) {
    const appStore = await getStore();
    try {
      const newUser = await post(
        '/api/register',
        JSON.stringify({
          email: appStore.users.registerEmail,
          password: appStore.users.registerPassword,
        }),
        {
          headers: {
            'content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      if (newUser.error) {
        throw newUser.error;
      }
      alert('Succes!!');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(registerEmail(''));
    store.dispatch(registerPassword(''));
  }
  login(user) {
    return post(`/login`, user);
  }
}

export default new UserService();
