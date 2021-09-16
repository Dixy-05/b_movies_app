import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './moviesReducer';
import adminUserReducer from './adminUser_reducer';

const RootReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  adminUsers: adminUserReducer,
});

export default RootReducer;
