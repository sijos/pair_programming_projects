import {App} from './app.jsx';
import React from 'react';
import {Provider} from 'react-redux';

export const Root = ( {store} ) => (
  <Provider store={store}>
    <App />
  </Provider>
);
