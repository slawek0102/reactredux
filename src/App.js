import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../src/actions/index';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.countriesList()
  }

  render() {
    return (
      <div>Hej</div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, actions)(App);
