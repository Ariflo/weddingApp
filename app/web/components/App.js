import React from 'react';
import { connect } from 'react-redux';
import anr_img from '../images/a_n_r_logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app_container">
        <h1>Greetings Visitor!</h1>
        <img className="a_and_r_img" src={anr_img} alt="A_and_R_splash" />
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

export default connect(mapStateToProps, {})(App);
