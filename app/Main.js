import React from 'react';
import { Router, Reducer, ActionConst } from 'react-native-router-flux'
import routes from './routes';

const reducer = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

class Main extends React.Component {
  render() {
    return (
      <Router createReducer={reducer} tintColor='red'>
        {routes()}
      </Router>
    );
  }
}

export default Main;
