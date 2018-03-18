import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../src/reducers/index';

import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  )}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
