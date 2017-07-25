import React from 'react';
import { Scene } from 'react-native-router-flux'
import App from './components/App';

export default () => {
  return (
    <Scene key="root">
        <Scene key="launch" component={App} initial />
    </Scene>
  );
};
