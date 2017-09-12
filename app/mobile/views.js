import React from 'react';
import { Scene } from 'react-native-router-flux'
import Login from './components/Login.js';

export default () => {
  return (
    <Scene key="root">
        <Scene key="launch" component={Login} initial />
    </Scene>
  );
};
