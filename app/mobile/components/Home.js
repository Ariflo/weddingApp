import React, { Component } from 'react';
import {
  Container,
  StyleProvider
} from 'native-base';
import {
  getStyleTheme,
  native_base_material
} from '../styles/modules/main-styles.js';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Container>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
