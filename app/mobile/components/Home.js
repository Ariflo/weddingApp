import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
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
          <ScrollView>
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
                <Text style={home.date_title}>HR</Text>
              </View>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>51</Text>
                </View>
                <Text style={home.date_title}>MIN</Text>
              </View>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>10</Text>
                </View>
                <Text style={home.date_title}>SEC</Text>
              </View>
            </View>
            <Thumbnail style={home.thumbnail} large source={require('../images/a_n_r_engagement.jpg')} />
              <View style={home.location_time_container}>
                <Text style={home.location_header}>California Academy of Sciences</Text>
                <Text style={home.location}>55 Music Concourse Dr</Text>
                <Text style={home.location}>San Francisco, CA 94118</Text>
                <Text style={home.time}>Four O'Clock PM</Text>
              </View>
              <Thumbnail style={home.thumbnail} large source={require('../images/a_n_r_postcard.jpg')} />
          </ScrollView>
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
