import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './Containers/About';
import GearList from './Containers/GearList';
import NavBar from './components/NavBar/NavBar';
import GearListBoard from './Containers/GearListBoard';
import Auth from './Containers/Auth/';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route component={About} exact path="/" />
          <Route component={Auth} exact path="/login" />
          <Route component={GearList} exact path="/gear-list/:user/:id" />
          <Route component={GearListBoard} exact path="/gear-list-board" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
