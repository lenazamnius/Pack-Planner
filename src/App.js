import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './containers/Auth/LogIn';
import GearList from './containers/GearList';
import SignUp from './containers/Auth/SignUp';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/Navigation/Navbar';
import GearListBoard from './containers/GearListBoard';
import CreateGearList from './containers/CreateGearList';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import M from 'materialize-css';
import './App.css';

const App = () => {
  useEffect(() => M.AutoInit());

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PublicRoute path="/signup">
            <SignUp />
          </PublicRoute>
          <PublicRoute path="/login">
            <LogIn />
          </PublicRoute>
          <PrivateRoute path="/create-gear-list">
            <CreateGearList />
          </PrivateRoute>
          <PrivateRoute path="/gear-list-board">
            <GearListBoard />
          </PrivateRoute>
          <PrivateRoute path="/gear-list/:id">
            <GearList />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
