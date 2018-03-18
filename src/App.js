import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../src/actions/index';
import PropTypes from 'prop-types';

import Country from './components/DisplayCountriesComponent/DisplayCountriesComponent';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getCountriesList();
  }

  render() {
    return (
      <div>
        {<Country/>}
      </div>

    );
  }
}

App.propTypes = { getCountriesList: PropTypes.func.isRequired };

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, actions)(App);
