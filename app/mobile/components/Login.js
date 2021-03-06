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
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import login from '../styles/components/login_styles.js';
import {
  getStyleTheme,
  native_base_material
} from '../styles/modules/main-styles.js';
import { login_guest } from '../../shared/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ''
    };
  }

  doSubmit() {
    if (!_.isEmpty(this.state.code)) {
      this.props.login_guest(this.state.code).then(data => {
        //reset state
        this.setState({
          code: ''
        });
        Actions.home();
      });
    }
  }

  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Container>
          <ImageBackground
            source={{ 
              uri: 'https://media.giphy.com/media/rIDbVBecGulqM/giphy.gif',
              cache: 'default'
            }}
            style={{ width: null, height: 780 }}
          >
            <Header style={login.header} />
            <Content style={login.content_container}>
              <Form>
                <Item floatingLabel last>
                  <Label>Guest Code</Label>
                  <Input
                    secureTextEntry
                    value={this.state.code}
                    style={login.input}
                    onChangeText={text => this.setState({ code: text })}
                  />
                </Item>
              </Form>
              <Button style={login.sign_up_btn} onPress={() => this.doSubmit()}>
                <Text style={login.sign_up_btn_txt}>Login</Text>
              </Button>
            </Content>
          </ImageBackground>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  login_guest
})(Login);
