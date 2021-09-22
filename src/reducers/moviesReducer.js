const initialState = {
  addMovie: {
    movieTitle: '',
    movieGenre: '',
    movieYear: '',
    movieLength: '',
  },
  updateMovie: {},
  movieId: '',
  findMovieTitle: '',
  movieData: {
    id: '',
    title: '',
    genre: '',
    year: '',
    movie_length: '',
  },
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      let input = action.input;
      let movieProp = action.movieProp;
      return {
        ...state,
        addMovie: { ...state.addMovie, [movieProp]: input },
      };

    case 'FIND_MOVIE':
      let movie = action.movie;
      return {
        ...state,
        findMovieTitle: movie,
      };

    case 'STORE_MOVIE_DATA':
      let data = action.data;
      return {
        ...state,
        movieData: data,
      };

    case 'UPDATE_MOVIE':
      let update = action.input;
      let movieProperty = action.movieProp;
      return {
        ...state,
        updateMovie: { ...state.updateMovie, [movieProperty]: update },
      };
    case 'RESET_UPDATE':
      let object = action.obj;
      return {
        ...state,
        updateMovie: object,
      };

    case 'STORE_ID':
      let id = action.id;
      return {
        ...state,
        movieId: id,
      };

    default:
      return state;
  }
};

export default moviesReducer;
