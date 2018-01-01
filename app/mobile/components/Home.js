import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Content, Text } from 'native-base';
import home from '../styles/components/home_styles.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={home.container}>
          <Text style={home.date}>January 17, 2019</Text>
          <View style={home.countdown}>
            <View style={home.countdown_num_container}>
              <View style={home.date_box}>
                <Text style={home.date_txt}>200</Text>
              </View>
              <Text style={home.date_title}>DAYS</Text>
            </View>
            <View style={home.countdown_num_container}>
              <View style={home.date_box}>
                <Text style={home.date_txt}>10</Text>
              </View>
              <Text style={home.date_title}>HOURS</Text>
            </View>
            <View style={home.countdown_num_container}>
              <View style={home.date_box}>
                <Text style={home.date_txt}>51</Text>
              </View>
              <Text style={home.date_title}>MINUTES</Text>
            </View>
            <View style={home.countdown_num_container}>
              <View style={home.date_box}>
                <Text style={home.date_txt}>10</Text>
              </View>
              <Text style={home.date_title}>SECONDS</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ guests }) => {
  return {
    guest_party: guests.guest_party
  };
};

export default connect(mapStateToProps, {})(Home);
