import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CircularProgress, Box } from '@material-ui/core';
import firebase from './firebase/config';
import RootRouter from './routes/RootRouter';
import NavBar from './containers/NavBar';
import './App.css';

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

  return firebaseInitialized !== false ? (
    <Router>
      <NavBar logged={isLogged} setIsLogged={setIsLogged} />
      <RootRouter logged={isLogged} setIsLogged={setIsLogged} />
    </Router>
  ) : (
    <Box className="loader">
      <CircularProgress />
    </Box>
  );
};

export default App;
