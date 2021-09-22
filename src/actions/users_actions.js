export const registerEmail = (email) => {
  return {
    type: 'REGISTER_EMAIL',
    email: email,
  };
};
export const registerPassword = (password) => {
  return {
    type: 'REGISTER_PASSWORD',
    password: password,
  };
};
export const findUser = (email) => {
  return {
    type: 'FIND_EMAIL',
    email: email,
  };
};
export const deleteUser = (email) => {
  return {
    type: 'DELETE_EMAIL',
    email: email,
  };
};
export const userInfo = (data) => {
  return {
    type: 'USER_INFO',
    data: data,
  };
};
