import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import firebase from './firebase/config';
import LogIn from './containers/Auth/LogIn';
import SignUp from './containers/Auth/SignUp';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/Navigation/Navbar';
import GearList from './containers/GearList/GearList';
import GearListBoard from './containers/GearListBoard';
import CreateGearList from './containers/CreateGearList';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import './App.css';

const App = () => {
  // const [firebaseInitialized, setFirebaseInitialized] = useState();
  // const [isLogged, setIsLogged] = useState();

  // useEffect(() => {
  //   firebase.isInitialized().then((val) => {
  //     const logged = !!val;
  //     setFirebaseInitialized(val);
  //     setIsLogged(logged);
  //   });
  // });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/create-gear-list" component={CreateGearList} />
          <Route path="/gear-list-board" component={GearListBoard} />
          <Route path="/gear-list/:id" component={GearList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
