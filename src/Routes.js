import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page imports
import Reminders from './pages/index';

const Routes = () => {
  return (
    <Switch>
      <Route path='/reminders'>
        <Reminders />
      </Route>
    </Switch>
  );
};

export default Routes;
