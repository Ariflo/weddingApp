import React, { Component } from 'react';
import moment from 'moment';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
import home from '../styles/components/home_styles.js';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const diff = moment('2018-01-17T16:00:00+00:00') - moment();
    let duration = moment.duration(diff);
    
    setInterval(() => {
      new_duration = moment.duration(duration, 'milliseconds');
      Actions.refresh({ 
        days: new_duration.days(), 
        hours: new_duration.hours(), 
        minutes: new_duration.minutes(), 
        seconds: new_duration.seconds() 
      });
    }, 1000);
    
    return (
      <Container>
        <Content contentContainerStyle={home.container}>
          <ScrollView>
            <Text style={home.date}>January 17, 2018</Text>
            <View style={home.countdown}>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>{duration.days()}</Text>
                </View>
                <Text style={home.date_title}>DAYS</Text>
              </View>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>{duration.hours()}</Text>
                </View>
                <Text style={home.date_title}>HR</Text>
              </View>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>{duration.minutes()}</Text>
                </View>
                <Text style={home.date_title}>MIN</Text>
              </View>
              <View style={home.countdown_num_container}>
                <View style={home.date_box}>
                  <Text style={home.date_txt}>{duration.seconds()}</Text>
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
