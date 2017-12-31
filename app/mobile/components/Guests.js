import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import guests from '../styles/components/guests_styles.js';
import { Container, Header, Content, List, ListItem, Text} from 'native-base';
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
    console.log(this.props.all_guests);
    return (
      <Container>
        <Header style={guests.header}>
          <Text style={guests.header_txt}>Guest List</Text>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
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
