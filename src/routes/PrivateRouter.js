import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GearList from '../containers/GearList';
import LandingPage from '../containers/LandingPage';
import GearListBoard from '../containers/GearListBoard';
import CreateGearList from '../containers/GearList/components/CreateGearList';

const PrivateRouter = ({ logged }) => {
  return (
    <div>
      <Switch>
        <Route component={GearListBoard} exact path="/gear-list-board" />
        <Route component={GearList} exact path="/gear-list/:id" />
        <Route component={CreateGearList} exact path="/create-gear-list" />
        <Route path="/">
          <LandingPage logged={logged} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PrivateRouter;
