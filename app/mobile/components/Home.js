import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Badge,
  Text,
  Icon
} from 'native-base';
import {
  getStyleTheme,
  native_base_material
} from '../styles/modules/main-styles.js';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <StyleProvider style={getStyleTheme(native_base_material)}>
        <Container>
          <Header />
          <Content />
          <Footer>
            <FooterTab>
              <ScrollView horizontal={true}>
                <Button badge vertical>
                  <Badge><Text>2</Text></Badge>
                  <Icon name="apps" />
                  <Text>RSVP</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera" />
                  <Text>Camera</Text>
                </Button>
                <Button active badge vertical>
                  <Badge><Text>51</Text></Badge>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
                <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
                <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </ScrollView>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
