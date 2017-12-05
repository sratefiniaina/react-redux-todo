import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';

const AppRouters = () => {
  return (
    <Route path='/' component={App} />
  );
}

export default AppRouters;
