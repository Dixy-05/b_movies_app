import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const RootReducer = combineReducers({
  users: usersReducer,
});

export default RootReducer;
