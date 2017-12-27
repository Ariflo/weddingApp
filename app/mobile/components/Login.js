import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import login from '../styles/components/login_styles.js';


class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={login.label}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={login.label}>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button style={login.sign_up_btn} bordered >
            <Text>Sign-in</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ first_store }) => {
  return {
    first_store,
  };
};

export default connect(mapStateToProps, {})(Login);
