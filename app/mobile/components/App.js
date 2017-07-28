import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { fetchNasaApod } from '../../shared/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.first_store.isFetching) {
      this.props.fetchNasaApod();
    }
  }

  _linkPressed (url) {
     Linking.openURL(url);
  }

  render() {
    if (!this.props.first_store.isReady) {
      return null;
    }

    const uri = this.props.nasa_space_img_url ? this.props.nasa_space_img_url : null;

    return (
      <View>
        <Text>Hello Mobile World!</Text>
        <Text>
          Check out this Nasa Space Image
          brought to you by React-Redux!
        </Text>
        <Image
          source={{ uri, }}
          style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ first_store }) => {
  return {
    first_store,
    nasa_space_img_url: first_store.data.url,
  };
};

export default connect(mapStateToProps, {
  fetchNasaApod,
})(App);
