const initialState = {
  singUpEmail: '',
  singUpPassword: '',
  logInEmail: '',
  logInPassword: '',
  adminUserAccount: '',
  loggedIn: localStorage.getItem('tk') ? true : false,
};
const adminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_EMAIL':
      let email = action.email;
      return {
        ...state,
        signUpEmail: email,
      };
    case 'SIGN_UP_PASSWORD':
      let password = action.password;
      return {
        ...state,
        signUpPassword: password,
      };
    case 'ADMIN_EMAIL':
      let loginEmail = action.email;
      return {
        ...state,
        logInEmail: loginEmail,
      };
    case 'ADMIN_PASSWORD':
      let loginPassword = action.password;
      return {
        ...state,
        logInPassword: loginPassword,
      };
    case 'ADMIN_ACCOUNT':
      let account = action.account;
      return {
        ...state,
        adminUserAccount: account,
      };
    case 'IS_LOGGEDIN':
      let token = action.token;
      return {
        ...state,
        loggedIn: token,
      };

    default:
      return state;
  }
};

export default adminUserReducer;
