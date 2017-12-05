import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters';
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
