import { applyMiddleware, createStore, compose } from 'redux';
import RootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(RootReducer, composedEnhancer);
