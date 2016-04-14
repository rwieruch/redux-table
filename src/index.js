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
    id: '1',
    name: 'First',
    completed: true
  },
  {
    id: '2',
    name: 'Second',
    completed: false
  },
  {
    id: '3',
    name: 'Third',
    completed: false
  },
  {
    id: '4',
    name: 'Fourth',
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
