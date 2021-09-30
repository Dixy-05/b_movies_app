import {
  addMovie,
  findMovie,
  storeMovie,
  updateMovie,
  storeMovieId,
  resetUpdate,
  delete_movie,
} from '../actions/movies_actions';
import { store } from '../stores/store';

const { get, post, del, put } = require('../utils/api');

class movieService {
  state = () => store.getState();
  async addNewMovie() {
    const appMovies = this.state().movies;
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
      alert(`The movie "${movie.movie.title}" has been created !!`);
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
    const appStore = this.state().movies;
    try {
      const movie = await get(`/api/movies/${appStore.findMovieTitle}`);
      if (movie.error) {
        throw movie.error;
      }
      store.dispatch(storeMovie(movie.movie));
      store.dispatch(findMovie(''));
      return movie;
    } catch (error) {
      console.log(error);
      // store.dispatch(storeMovie({}));
      alert(error);
    }
    store.dispatch(findMovie(''));
  }
  async updateMovie() {
    const appStore = this.state().movies;
    try {
      const movie = await put(
        `/api/movies/${appStore.movieId}`,
        JSON.stringify(appStore.updateMovie)
      );
      if (movie.error) {
        throw movie.error;
      }
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
  async deleteMovie() {
    const appStore = this.state().movies;
    try {
      const movie = await del(`/api/movies/${appStore.deleteMovieId}`);
      if (movie.error) {
        throw movie.error;
      }
      alert('Movie was successfuly deleted');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(delete_movie(''));
  }
}

export default new movieService();
