const initialState = {
  addMovie: {
    movieTitle: '',
    movieGenre: '',
    movieYear: '',
    movieLength: '',
  },
  findMovieTitle: '',
  movieData: {},
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

    //     case 'ADD_GENRE':
    //       let genre = action.movieProp;
    //       return {
    //         ...state,
    //         addMovie: { ...state.addMovie, movieGenre: genre },
    //       };

    //     case 'ADD_YEAR':
    //       let year = action.movieProp;
    //       return {
    //         ...state,
    //         addMovie: { ...state.addMovie, movieYear: year },
    //       };

    //     case 'ADD_LENGTH':
    //       let length = action.movieProp;
    //       return {
    //         ...state,
    //         addMovie: { ...state.addMovie, movieLength: length },
    //       };

    default:
      return state;
  }
};

export default moviesReducer;
