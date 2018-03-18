import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import './DisplayCountrList.css';
import { getCountryDetails } from '../../actions';

const Country = (props) => {

  const { countries, getCountryDetails } = props;

  const countryList = countries.map((country) => (
    <div onClick = {getCountryDetails} key={country.alpha3Code}>
      <Paper
        className='countries_list'
        elevation={3}>{country.name}
      </Paper>
    </div>
    )
  );

  return (
    <div >{countryList}</div>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countries,
    getCountryDetails: state.getCountryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryDetails: (click) => {dispatch(getCountryDetails(click));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
