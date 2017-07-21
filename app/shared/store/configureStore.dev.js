import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';


export default function configureStore() {
  // setup redux
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk, // lets us dispatch() functions
        createLogger(),
      ),
    ),
  );

  // enable webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
