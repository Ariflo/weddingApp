import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Content } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content />
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
