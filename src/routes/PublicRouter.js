import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from '../containers/Auth/components/LoginForm';
import RegisterForm from '../containers/Auth/components/RegisterForm';
import LandingPage from '../containers/LandingPage';

const PublicRouter = ({ setIsLogged }) => {
  console.log('public router');
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
        {/* <Route component={LoginForm} exact path="/login" /> */}
        {/* <Route component={RegisterForm} exact path="/signup" /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PublicRouter;
