import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import views from './views';
import configureStore from '../shared/store/configureStore';
import { StyleProvider } from 'native-base';
import {
  getStyleTheme,
  native_base_material
} from './styles/modules/main-styles.js';

const ConnectedRouter = connect()(Router);
const store = configureStore();

export default class Main extends React.Component {
  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Provider store={store}>
          <ConnectedRouter>{views()}</ConnectedRouter>
        </Provider>
      </StyleProvider>
    );
  }
}
