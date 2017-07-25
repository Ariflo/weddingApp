import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './app/mobile/Main.js';

class aandr_wedding_app extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('aandr_wedding_app', () => aandr_wedding_app);
