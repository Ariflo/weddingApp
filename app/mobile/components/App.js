import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import Login from './Login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

const mapStateToProps = ({ first_store }) => {
  return {
    first_store,
  };
};

export default connect(mapStateToProps, {})(App);
