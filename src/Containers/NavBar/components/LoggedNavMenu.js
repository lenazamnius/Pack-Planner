import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import firebase from '../../../firebase/config';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  link: {
    marginLeft: '20px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'white',
  },
}));

// const LoggedNavMenu = ({ logOut }) => {
const LoggedNavMenu = (props) => {
  const { setIsLogged } = props;
  const classes = useStyles();

  const logOut = async () => {
    await firebase.logout();
    setIsLogged(false);
    props.history.push('/login');
  };

  return (
    <Box>
      <NavLink className={classes.link} to="/">
        Home
      </NavLink>
      <NavLink className={classes.link} to="/gear-list-board">
        PackBoard
      </NavLink>
      <NavLink className={classes.link} onClick={logOut} to="/login">
        LogOut
      </NavLink>
      <NavLink className={classes.link} to="/gear-list-board">
        {firebase.getUserCurrentName()}
      </NavLink>
    </Box>
  );
};

export default withRouter(LoggedNavMenu);
