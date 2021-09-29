import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './moviesReducer';
import adminUserReducer from './adminUser_reducer';
import subscriptionsReducer from './subscriptionsReducer';

const RootReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  subscriptions: subscriptionsReducer,
  adminUsers: adminUserReducer,
});

export default RootReducer;
