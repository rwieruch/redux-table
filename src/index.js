import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions/index';
import { TableContainer } from './components/Table';

require('../styles/index.scss');

const store = configureStore();

const todos = [
  {
    name: 'First',
    completed: true
  },
  {
    name: 'Second',
    completed: false
  },
  {
    name: 'Second',
    completed: false
  }
];

store.dispatch(actions.setItems(todos));

ReactDOM.render(
  <Provider store={store}>
    <TableContainer />
  </Provider>,
  document.getElementById('table')
);
