import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Footer from './Footer.js'
import {
  StyleProvider,
  Container,
  Content,
} from 'native-base';
import {
  getStyleTheme,
  native_base_material
} from '../styles/modules/main-styles.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Container>
          <Content />
          <Footer />
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
