import React, { useState, useEffect } from 'react';
import firebase from './firebase/config';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import './App.css';
import NavBar from './containers/NavBar';
import LogIn from './containers/Auth/LogIn';
import SignUp from './containers/Auth/SignUp';
import LandingPage from './containers/LandingPage';
import GearList from './containers/GearList/GearList';
import GearListBoard from './containers/GearListBoard';
import CreateGearList from './containers/CreateGearList';

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState();
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      const logged = !!val;
      setFirebaseInitialized(val);
      setIsLogged(logged);
    });
  });

  return (
    <div>
      <NavBar />
      <SignUp />
      <LogIn />
      <CreateGearList />
      <LandingPage />
      <GearListBoard />
      <GearList />
    </div>
  );
};

export default App;
