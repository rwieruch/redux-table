import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions/index';
import { App } from './components/App';

require('../styles/index.scss');

const store = configureStore();

const todos = [
  {
    id: '1',
    name: 'learn react',
    completed: true
  },
  {
    id: '2',
    name: 'learn redux',
    completed: false
  },
  {
    id: '3',
    name: 'build your first app',
    completed: false
  },
  {
    id: '4',
    name: 'learn thunk',
    completed: false
  },
  {
    id: '5',
    name: 'learn sagas',
    completed: false
  }
];

store.dispatch(actions.setItems(todos));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
