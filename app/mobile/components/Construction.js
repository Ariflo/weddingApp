import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
StyleProvider,
Container,
Content,
Text,
Thumbnail,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Footer from './Footer.js'
import construction from '../styles/components/construction_styles.js';

class Construction extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Content contentContainerStyle={construction.container}> 
        <Thumbnail style={construction.thumbnail} large source={require('../images/a_n_r_logo.png')} />
        <View style={construction.text_container}>
          <Text style={construction.txt}>We are still working on this feature; come back later to see what we've got in store!</Text>
        </View>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Construction);