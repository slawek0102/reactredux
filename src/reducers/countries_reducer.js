
let initialState = {
  countries: [{name: 'xx', alpha3Code:'xxx'}],
  showCountries: true,
  wiek: 0,
};

export default function(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return action.payload;
    case 'GET_COUNTRY_DETAILS':
      console.log(action);
      return state;
    default:
      return state;
  }
}
