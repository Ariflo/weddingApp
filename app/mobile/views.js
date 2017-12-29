import React from 'react';
import { Scene } from 'react-native-router-flux'
import Login from './components/Login.js';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';

export default () => {
  return (
    <Scene key="root">
        <Scene component={Login} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true} initial />
        <Scene key="sign_up" component={SignUp} />
    </Scene>
  );
};
