import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import {
  add_guest,
  add_significant_other,
  add_child,
  fetchGuests
} from '../../shared/actions';
import invite from '../styles/components/invite_styles.js';

class Invite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guest_data: {
        guest_id: null,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      },
      guest_type: 'Guest',
      plus_one_open: false,
      plus_kids: false
    };
  }

  handleChange(field, value) {
    const new_state = { guest_data: this.state.guest_data };
    new_state.guest_data[field] = value;
    this.setState(new_state);
  }

  addPlusOne(add_plus_one) {
    if (!add_plus_one) {
      if (this.state.plus_kids) {
        this._resetState();// clear form
        Actions.guests();
      } else {//no Significant Other, but has child
        this._resetState();// clear form
        this.setState({
          guest_type: 'Child',
          plus_one_open: true,
          plus_kids: true,
          guest_data: {
            guest_id: this.state.guest_data.guest_id
          }
        });
      }
    } else {
      if (this.state.guest_type === 'Guest') {
        this._resetState();// clear form
        this.setState({
          guest_type: 'Significant Other',
          guest_data: {
            guest_id: this.state.guest_data.guest_id
          }
        });
      } else {
        this._resetState();// clear form
        this.setState({
          guest_type: 'Child',
          guest_data: {
            guest_id: this.state.guest_data.guest_id
          }
        });
      }
    }
  }

  doSubmit() {
    if (this.state.guest_type === 'Guest') {
      this.props.add_guest(this.state.guest_data).then(data => {
        this.setState({
          plus_one_open: true,
          guest_data: {
            ...this.state.guest_data,
            guest_id: data.guest_id
          }
        });
      });
    } else if (this.state.guest_type === 'Significant Other') {
      this.props.add_significant_other(this.state.guest_data).then(() => {
        this.setState({
          plus_one_open: true,
          plus_kids: true
        });
      });
    } else if (this.state.guest_type === 'Child') {
      this.props.add_child(this.state.guest_data).then(() => {
        this.setState({
          plus_one_open: true,
          plus_kids: true
        });
      });
    }
  }

  _resetState() {
    this.setState({
      guest_data: {
        guest_id: null,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      },
      guest_type: 'Guest',
      plus_one_open: false,
      plus_kids: false
    });
  }

  render() {
    const any_more_kids = this.state.guest_type === 'Child' ? 'another' : 'a';
    return (
      <Container>
        <Header style={invite.header}>
          <Text style={invite.header_txt}>Invite Guests</Text>
        </Header>
        <Content contentContainerStyle={invite.container}>
          <Modal isVisible={this.state.plus_one_open}>
            <View style={invite.modal}>
              <Text style={invite.modal_txt}>
                Does this guest have {any_more_kids} {''}
                <Text style={invite.guest_type_txt}>
                  {!this.state.plus_kids ? 'significant other' : 'child'}
                </Text>{' '}
                you would like to invite ?
              </Text>
              <View style={invite.modal_menu_btn_container}>
                <Button
                  style={invite.modal_btn}
                  block
                  onPress={() => this.addPlusOne(true)}
                >
                  <Text>Yes</Text>
                </Button>
                <Button
                  style={invite.modal_btn}
                  block
                  onPress={() => this.addPlusOne()}
                >
                  <Text>No</Text>
                </Button>
              </View>
            </View>
          </Modal>
          <Item>
            <Input
              placeholder="First Name"
              value={this.state.guest_data.first_name}
              onChangeText={text => this.handleChange('first_name', text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Last Name"
              value={this.state.guest_data.last_name}
              onChangeText={text => this.handleChange('last_name', text)}
            />
          </Item>
          {this.state.guest_type !== 'Child' ? (
            <Item>
              <Input
                placeholder="Email"
                value={this.state.guest_data.email}
                onChangeText={text => this.handleChange('email', text)}
              />
            </Item>
          ) : null}
          {this.state.guest_type !== 'Child' ? (
            <Item>
              <Input
                placeholder="Phone"
                value={this.state.guest_data.phone}
                onChangeText={text => this.handleChange('phone', text)}
              />
            </Item>
          ) : null}
          {this.state.guest_type === 'Guest' ? (
            <Item>
              <Input
                placeholder="Address"
                value={this.state.guest_data.address}
                onChangeText={text => this.handleChange('address', text)}
              />
            </Item>
          ) : null}
          <Button style={invite.btn} block onPress={() => this.doSubmit()}>
            <Text style={invite.btn_txt}>Invite {this.state.guest_type}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  add_guest,
  add_significant_other,
  add_child,
  fetchGuests
})(Invite);
