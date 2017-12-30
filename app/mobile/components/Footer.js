import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import { Footer, FooterTab, Button, Badge, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import footer from '../styles/components/footer_styles.js';
import { Actions } from 'react-native-router-flux';

class Footer_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const tabs = [];
    this.props.navigationState.routes.forEach((scene) => {
      const { params } = scene.routes[0];
      tabs.push(
        <Button
          key={params.tab}
          vertical
          active={_.includes(Actions.currentScene, params.tab)}
          onPress={() => Actions[params.tab]()}
          badge={params.badge}
        >
          {params.badge ? <Badge><Text>2</Text></Badge> : null}
          <Icon name={params.icon} />
          <Text>{_.capitalize(params.tab)}</Text>
        </Button>
      );
    })
    
    return (
      <Footer style={footer.container}>
        <FooterTab>
          <ScrollView horizontal={true}>
          {tabs}
          </ScrollView>
        </FooterTab>
      </Footer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Footer_Component);
