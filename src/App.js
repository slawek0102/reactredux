import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../src/actions/index';

import DisplayCountryComponent from './components/DisplayCountriesComponent/DisplayCountriesComponent'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.countriesList()
  }

  render() {
    return (
      <div>
        <div>Tablice zostały załadowane do Stora</div>
        <DisplayCountryComponent/>
      </div>

    );
  };
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, actions)(App);
