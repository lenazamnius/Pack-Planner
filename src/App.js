import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import LandingPage from './Containers/LandingPage';
import Auth from './Containers/Auth/';
import GearList from './Containers/GearList';
import NavBar from './components/NavBar/NavBar';
import GearListBoard from './Containers/GearListBoard';
import './App.css';

const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  const logOutPressed = () => {
    const newLoggedValue = false;

    setIsLogged(newLoggedValue);
  };

  return (
    <Router>
      <NavBar logged={isLogged} logOutPressed={logOutPressed} />
      <div className="container">
        <Switch>
          <Route component={Auth} exact path="/login" />
          <Route component={LandingPage} exact path="/" />
          <Route component={GearList} exact path="/gear-list/:user/:id" />
          <Route component={GearListBoard} exact path="/gear-list-board" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
