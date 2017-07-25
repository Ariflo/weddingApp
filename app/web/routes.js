import React from 'react';
import { Route } from 'react-router';
import App from './components/App';

export default () => {
  return (
    <Route>
      <Route path="/" component={App} />
    </Route>
  );
};
