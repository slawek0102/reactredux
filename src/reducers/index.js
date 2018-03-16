import { combineReducers } from 'redux';

import countries from '../reducers/countries_reducer';

const rootReducer = combineReducers({
  countries,
});

export default rootReducer;
