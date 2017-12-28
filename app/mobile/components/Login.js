import React, { Component } from 'react';
import { ImageBackground, Platform } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  StyleProvider
} from 'native-base';
import { connect } from 'react-redux';
import login from '../styles/components/login_styles.js';
import { getStyleTheme, native_base_material } from '../styles/modules/main-styles.js';

class Login extends Component {
  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Container>
          <ImageBackground
            source={{
              uri: 'https://media.giphy.com/media/rIDbVBecGulqM/giphy.gif',
              cache: 'default'
            }}
            style={{ width: null, height: 620 }}
          >
            <Content style={login.content_container}>
              <Form>
                <Item floatingLabel last>
                  <Label>Guest Code</Label>
                  <Input secureTextEntry style={login.input} />
                </Item>
              </Form>
              <Button style={login.sign_up_btn}>
                <Text style={login.sign_up_btn_txt}>Login</Text>
              </Button>
            </Content>
          </ImageBackground>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = ({ first_store }) => {
  return {
    first_store
  };
};

export default connect(mapStateToProps, {})(Login);
