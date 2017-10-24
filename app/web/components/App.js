import React from 'react';
import { connect } from 'react-redux';
import { fetchNasaApod } from '../../shared/actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="app_container">
        <h1>Greetings Visitor!</h1>
        <img
          className="a_and_r_img"
          src="../images/ipad_1536x2008.png"
          alt="A_and_R_splash"
        />
        <h3 className="center-text">
          This is the home of our future wedding app. Come back and check it out Jan. 2018!
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  fetchNasaApod,
})(App);
