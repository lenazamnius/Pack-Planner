import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GearList from '../containers/GearList';
import LandingPage from '../containers/LandingPage';
import GearListBoard from '../containers/GearListBoard';

const PrivateRouter = () => {
  console.log('private router');
  return (
    <div>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={GearList} exact path="/gear-list/:id" />
        <Route component={GearListBoard} exact path="/gear-list-board" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PrivateRouter;
