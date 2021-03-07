import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page imports
import Home from './pages/index';
const Routes = () => {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
