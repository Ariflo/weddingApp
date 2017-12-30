import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Badge,
  Text,
  Icon
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import footer from '../styles/components/footer_styles.js';

class Footer_Component extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      rsvp_notif: false,
      contact_notif: false,
      event_notif: false,
    };
  }
  render() {
    return (
      <Footer style={footer.container}>
        <FooterTab>
          <ScrollView horizontal={true}>
            <Button active={Actions.currentScene === 'home'} onPress={() => Actions.home()} vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button active={Actions.currentScene === 'invite'} onPress={() => Actions.invite()} vertical>
              <Icon name="ios-person-add" />
              <Text>Invite</Text>
            </Button>
            <Button active={Actions.currentScene === 'guests'} onPress={() => Actions.guests()} vertical>
              <Icon name="ios-list-box" />
              <Text>Guests</Text>
            </Button>
            <Button active={Actions.currentScene === 'rsvp'} onPress={() => Actions.rsvp()} badge={this.state.rsvp_notif} vertical>
              {this.state.rsvp_notif ? <Badge><Text>2</Text></Badge> : null}
              <Icon name="mail" />
              <Text>RSVP</Text>
            </Button>
            <Button active={Actions.currentScene === 'contact'} onPress={() => Actions.contact()} badge={this.state.contact_notif} vertical>
              {this.state.contact_notif ? <Badge><Text>5</Text></Badge> : null}
              <Icon name="ios-chatbubbles" />
              <Text>Contact</Text>
            </Button>
            <Button active={Actions.currentScene === 'events'} onPress={() => Actions.events()} badge={this.state.event_notif} vertical>
              {this.state.event_notif ? <Badge><Text>10</Text></Badge> : null}
              <Icon name="ios-calendar" />
              <Text>Events</Text>
            </Button>
            <Button active={Actions.currentScene === 'registry'} onPress={() => Actions.registry()} vertical>
              <Icon name="ios-cart" />
              <Text>Registry</Text>
            </Button>
            <Button active={Actions.currentScene === 'travel'} onPress={() => Actions.travel()} vertical>
              <Icon name="ios-plane" />
              <Text>Travel</Text>
            </Button>
            <Button active={Actions.currentScene === 'pictures'} onPress={() => Actions.pictures()} vertical>
              <Icon name="ios-images" />
              <Text>Pictures</Text>
            </Button>
          </ScrollView>
        </FooterTab>
      </Footer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Footer_Component);