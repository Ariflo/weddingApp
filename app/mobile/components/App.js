import React from 'react';
import { connect } from 'react-redux';
import { Text, Image, View } from 'react-native';
import { fetchNasaApodMobile } from '../../shared/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.first_store.isFetching) {
      this.props.fetchNasaApodMobile();
    }
  }

  render() {
    const uri = this.props.nasa_space_img_url ? this.props.nasa_space_img_url : null;
    return (
      <View>
        <Text>Hello Mobile World!</Text>
        <Text>Check out this Nasa Space Image brought to you
          by React-Redux!</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{ uri, }}
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
  fetchNasaApodMobile,
})(App);
