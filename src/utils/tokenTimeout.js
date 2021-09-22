import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../actions/adminUser_actions';

export const TokenTimeout = async () => {
  console.log('TKtimeout working');
  const dispatch = useDispatch();
  let token = await localStorage.getItem('tk');
  const { exp } = await jwtDecode(token);
  console.log('exp:', exp);
  const expirationTime = exp * 1000 - 60000;
  if (Date.now() >= expirationTime) {
    dispatch(isLoggedIn(false));
    localStorage.removeItem('tk');
  }
};
