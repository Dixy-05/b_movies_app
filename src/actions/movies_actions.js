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

export const delete_movie = (id) => {
  return {
    type: 'DELETE_MOVIE',
    id: id,
  };
};
