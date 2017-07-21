import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore() {
  // setup redux
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
    ),
  );

  return store;
}
