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
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-person-add" />
              <Text>Invite</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-list-box" />
              <Text>Guests</Text>
            </Button>
            <Button badge={this.state.rsvp_notif} vertical>
              {this.state.rsvp_notif ? <Badge><Text>2</Text></Badge> : null}
              <Icon name="mail" />
              <Text>RSVP</Text>
            </Button>
            <Button badge={this.state.contact_notif} vertical>
              {this.state.contact_notif ? <Badge><Text>5</Text></Badge> : null}
              <Icon name="ios-chatbubbles" />
              <Text>Contact</Text>
            </Button>
            <Button badge={this.state.event_notif} vertical>
              {this.state.event_notif ? <Badge><Text>10</Text></Badge> : null}
              <Icon name="ios-calendar" />
              <Text>Events</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-cart" />
              <Text>Registry</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-plane" />
              <Text>Travel</Text>
            </Button>
            <Button vertical>
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