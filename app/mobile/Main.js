import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux'
import views from './views';
import configureStore from '../shared/store/configureStore';

const ConnectedRouter = connect()(Router);
const store = configureStore();

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter>
          {views()}
        </ConnectedRouter>
      </Provider>
    );
  }
}
