import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import routes from './routes';
import configureStore from '../shared/store/configureStore';

// load our css
import './styles/main.scss';

const store = configureStore();
const rootElement = document.getElementById('root');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>, rootElement,
);
