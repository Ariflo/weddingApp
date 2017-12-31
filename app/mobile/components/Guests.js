import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RefreshControl } from 'react-native';
import guests from '../styles/components/guests_styles.js';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';
import { fetchGuests } from '../../shared/actions';
import { Actions } from 'react-native-router-flux';

class Guests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false
    };
  }

  componentWillMount() {
    this.props.fetchGuests();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.fetchGuests().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    const divider_letters = {};
    const guest_list = _.sortBy(this.props.all_guests, 'first_name').reduce(
      (mem, guest) => {
        if (
          typeof guest === 'object' &&
          !divider_letters[guest.first_name[0]]
        ) {
          divider_letters[guest.first_name[0]] = true;
          const unique_key = guest.attendee_id + Math.random() * 10000;

          mem.push(
            <ListItem key={unique_key} itemDivider>
              <Text>{guest.first_name[0]}</Text>
            </ListItem>
          );
        }
        mem.push(
          <ListItem key={guest.attendee_id}>
            <Text>
              {guest.first_name} {guest.last_name}
            </Text>
          </ListItem>
        );

        return mem;
      },
      []
    );
    return (
      <Container>
        <Header style={guests.header}>
          <Text style={guests.header_txt}>Guest List</Text>
        </Header>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <List>{guest_list}</List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ guests }) => {
  return {
    guests_isReady: guests.isReady,
    all_guests: guests.all_guests
  };
};

export default connect(mapStateToProps, {
  fetchGuests
})(Guests);
