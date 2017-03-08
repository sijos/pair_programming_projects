import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store.js';
import {Root} from './components/root.jsx';
import getRekd from './utils/todo_api_utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));

  window.getRekd = getRekd;
  window.store = store;
});
