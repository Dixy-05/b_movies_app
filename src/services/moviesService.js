import {
  addMovie,
  findMovie,
  storeMovie,
  updateMovie,
  storeMovieId,
  resetUpdate,
} from '../actions/movies_actions';
import { store } from '../stores/store';

const { get, post, del, put } = require('../utils/api');
const getStore = async () => {
  const state = await store.getState();
  return state;
};
class movieService {
  async addNewMovie() {
    const appStore = await getStore();
    const appMovies = appStore.movies;
    console.log('addMovie', appStore.movies.addMovie);
    try {
      const movie = await post(
        '/api/movies',
        JSON.stringify({
          title: appMovies.addMovie.movieTitle,
          genre: appMovies.addMovie.movieGenre,
          year: appMovies.addMovie.movieYear,
          movieLength: appMovies.addMovie.movieLength,
        })
      );
      if (movie.error) {
        throw movie.error;
      }
      console.log('movie:', movie);
      alert(`The movie ${movie.movie.title} has been created !!`);
    } catch (error) {
      console.log(error);
      alert(error);
    }

    store.dispatch(addMovie('', 'movieTitle'));
    store.dispatch(addMovie('', 'movieGenre'));
    store.dispatch(addMovie('', 'movieYear'));
    store.dispatch(addMovie('', 'movieLength'));
  }
  async findMovie() {
    const appStore = await getStore();
    try {
      const movie = await get(`/api/movies/${appStore.movies.findMovieTitle}`);
      console.log('movies service:', movie.movie);
      if (movie.error) {
        throw movie.error;
      }
      store.dispatch(storeMovie(movie.movie));
    } catch (error) {
      console.log(error);
      store.dispatch(
        storeMovie({ id: '', title: '', genre: '', year: '', movie_length: '' })
      );
      alert(error);
    }
    store.dispatch(findMovie(''));
  }
  async updateMovie() {
    const appStore = await getStore();
    try {
      const movie = await put(
        `/api/movies/${appStore.movies.movieId}`,
        JSON.stringify(appStore.movies.updateMovie)
      );
      if (movie.error) {
        throw movie.error;
      }
      console.log('getUser:', movie);
      alert('Movie successfuly updated');
    } catch (error) {
      console.log(error);
    }

    store.dispatch(updateMovie('', 'title'));
    store.dispatch(updateMovie('', 'genre'));
    store.dispatch(updateMovie('', 'year'));
    store.dispatch(updateMovie('', 'movieLength'));
    store.dispatch(storeMovieId(''));
    store.dispatch(resetUpdate({}));
  }
  async deleteUser() {
    const appStore = await getStore();
    try {
      const user = await del(`/api/users/${appStore.users.deleteEmail}`);
      if (user.error) {
        throw user.error;
      }
      alert('User Successfuly deleted!!');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    // store.dispatch(deleteUser(''));
  }
}

export default new movieService();
