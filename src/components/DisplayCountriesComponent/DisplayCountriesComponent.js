import React from 'react';
import { connect } from 'react-redux';

const DisplayCountryComponent = (props) => {
  const { countries } = props;

  return (
    countries.map((country)=>{
      return (
        <div>{country.name}</div>
      );
    })
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, null)(DisplayCountryComponent);