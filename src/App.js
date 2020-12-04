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
import 'materialize-css/dist/css/materialize.css';
// import 'materialize-css/dist/js/materialize';
import book from './routes/book';
import M from 'materialize-css';
import './App.css';

const App = () => {
  useEffect(() => M.AutoInit());

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={book.home} component={LandingPage} />
          <PublicRoute path={book.signup}>
            <SignUp />
          </PublicRoute>
          <PublicRoute path={book.login}>
            <LogIn />
          </PublicRoute>
          <PrivateRoute path={book.listsBoard}>
            <GearListBoard />
          </PrivateRoute>
          <PrivateRoute path={`${book.toList}/:id`}>
            <GearList />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
