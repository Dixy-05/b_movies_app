export const addMovie = (input, movieProp) => {
  return {
    type: 'ADD_MOVIE',
    input: input,
    movieProp: movieProp,
  };
};
// export const addGenre = (movieProp) => {
//   return {
//     type: 'ADD_GENRE',
//     movieProp: movieProp,
//   };
// };
// export const addYear = (movieProp) => {
//   return {
//     type: 'ADD_YEAR',
//     movieProp: movieProp,
//   };
// };
// export const addLength = (movieProp) => {
//   return {
//     type: 'ADD_LENGTH',
//     movieProp: movieProp,
//   };
// };
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
