import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from '../containers/Auth/components/LoginForm';
import RegisterForm from '../containers/Auth/components/RegisterForm';
import LandingPage from '../containers/LandingPage';

const PublicRouter = ({ setIsLogged }) => {
  return (
    <div>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route exact path="/login">
          <LoginForm setIsLogged={setIsLogged} />
        </Route>
        <Route exact path="/signup">
          <RegisterForm setIsLogged={setIsLogged} />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default PublicRouter;
