export const signUpEmail = (email) => {
  return {
    type: 'SIGN_UP_EMAIL',
    email: email,
  };
};
export const signUpPassword = (password) => {
  return {
    type: 'SIGN_UP_PASSWORD',
    password: password,
  };
};
export const logInEmail = (email) => {
  return {
    type: 'ADMIN_EMAIL',
    email: email,
  };
};
export const logInPassword = (password) => {
  return {
    type: 'ADMIN_PASSWORD',
    password: password,
  };
};
export const adminAccount = (email) => {
  return {
    type: 'ADMIN_ACCOUNT',
    account: email,
  };
};
export const isLoggedIn = (boolean) => {
  return {
    type: 'IS_LOGGEDIN',
    token: boolean,
  };
};
