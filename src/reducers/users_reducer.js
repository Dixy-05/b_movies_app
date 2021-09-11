const initialState = {
  registerEmail: '',
  registerPassword: '',
  loginEmail: '',
  loginPassword: '',
  findEmail: '',
  deleteEmail: '',
  userInfo: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_EMAIL':
      let newRegisterEmail = action.email;
      return {
        ...state,
        registerEmail: newRegisterEmail,
      };
    case 'REGISTER_PASSWORD':
      let newRegisterPassword = action.password;
      return {
        ...state,
        registerPassword: newRegisterPassword,
      };
    case 'LOGIN_EMAIL':
      let newLoginEmail = action.email;
      return {
        ...state,
        loginEmail: newLoginEmail,
      };
    case 'LOGIN_PASSWORD':
      let newLoginPassword = action.password;
      return {
        ...state,
        loginPassword: newLoginPassword,
      };
    case 'FIND_EMAIL':
      let newFindEmail = action.email;
      return { ...state, findEmail: newFindEmail };

    case 'DELETE_EMAIL':
      let newDeleteEmail = action.email;
      return { ...state, deleteEmail: newDeleteEmail };

    case 'USER_INFO':
      let userInfo = action.data;
      return { ...state, userInfo: userInfo };
    default:
      return state;
  }
};

export default usersReducer;
