import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import Footer from './Footer.js';
import { add_guest } from '../../shared/actions';

class Invite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: ''
    };
  }

  handleChange(field, value) {
    const new_state = {};
    new_state[field] = value;

    this.setState(new_state);
  }

  doSubmit() {
    this.props.add_guest(this.state);

    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: ''
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input
              placeholder="First Name"
              value={this.state.first_name}
              onChangeText={text => this.handleChange('first_name', text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Last Name"
              value={this.state.last_name}
              onChangeText={text => this.handleChange('last_name', text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={text => this.handleChange('email', text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Phone"
              value={this.state.phone}
              onChangeText={text => this.handleChange('phone', text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Address"
              value={this.state.address}
              onChangeText={text => this.handleChange('address', text)}
            />
          </Item>
          <Button block onPress={() => this.doSubmit()}>
            <Text>Submit</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  add_guest
})(Invite);
