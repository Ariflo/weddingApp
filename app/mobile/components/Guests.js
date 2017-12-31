import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import guests from '../styles/components/guests_styles.js';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { fetchGuests } from '../../shared/actions';

class Guests extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.fetchGuests();
  }

  render() {
    const divider_letters = {};
    const guest_list = _.sortBy(this.props.all_guests, 'first_name').reduce(
      (mem, guest) => {
        if (!divider_letters[guest.first_name[0]]) {
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
        <Content>
          <List>{guest_list}</List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ guests }) => {
  return {
    all_guests: guests.all_guests
  };
};

export default connect(mapStateToProps, {
  fetchGuests
})(Guests);
