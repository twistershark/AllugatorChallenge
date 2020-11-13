import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Homepage from '../pages/Homepage';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" component={Homepage} exact /> */}
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
