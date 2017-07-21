import React from 'react';
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
  render() {
    const img_url = this.props.nasa_space_img_url ? this.props.nasa_space_img_url : null;

    return (
      <div>
        <h1>Hello Web World</h1>
        <p>
          Check out <a href={img_url}>this</a> Nasa Space Image
          brought to you by React-Redux!
        </p>
      </div>
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
