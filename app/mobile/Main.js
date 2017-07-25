import React from 'react';
import { Router, Reducer, ActionConst } from 'react-native-router-flux'
import views from './views';

const reducer = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

export default class Main extends React.Component {
  render() {
    return (
      <Router createReducer={reducer} tintColor='red'>
        {views()}
      </Router>
    );
  }
}
