import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../actions/adminUser_actions';

export const tokenExpiration = async () => {
  console.log('TKtimeout working');
  // const dispatch = useDispatch();
  let token = await localStorage.getItem('tk');
  const { exp } = await jwtDecode(token);
  console.log('exp:', exp * 1000);
  console.log('date now:', Date.now());
  const expirationTime = exp * 1000 - 60000;
  if (Date.now() >= exp * 1000) {
    // dispatch(isLoggedIn(false));
    return localStorage.removeItem('tk');
  }
};
