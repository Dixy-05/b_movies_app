export const addMovie = (input, movieProp) => {
  return {
    type: 'ADD_MOVIE',
    input: input,
    movieProp: movieProp,
  };
};
export const findMovie = (movie) => {
  return {
    type: 'FIND_MOVIE',
    movie: movie,
  };
};
export const storeMovie = (data) => {
  return {
    type: 'STORE_MOVIE_DATA',
    data: data,
  };
};
export const updateMovie = (input, movieProp) => {
  return {
    type: 'UPDATE_MOVIE',
    input: input,
    movieProp: movieProp,
  };
};
export const resetUpdate = (obj) => {
  return {
    type: 'RESET_UPDATE',
    obj: obj,
  };
};
export const storeMovieId = (id) => {
  return {
    type: 'STORE_ID',
    id: id,
  };
};

// export const registerPassword = (password) => {
//   return {
//     type: 'REGISTER_PASSWORD',
//     password: password,
//   };
// };
// export const loginEmail = (email) => {
//   return {
//     type: 'LOGIN_EMAIL',
//     email: email,
//   };
// };
// export const loginPassword = (password) => {
//   return {
//     type: 'LOGIN_PASSWORD',
//     password: password,
//   };
// };
// export const findUser = (email) => {
//   return {
//     type: 'FIND_EMAIL',
//     email: email,
//   };
// };
// export const deleteUser = (email) => {
//   return {
//     type: 'DELETE_EMAIL',
//     email: email,
//   };
// };
// export const userInfo = (data) => {
//   return {
//     type: 'USER_INFO',
//     data: data,
//   };
// };
