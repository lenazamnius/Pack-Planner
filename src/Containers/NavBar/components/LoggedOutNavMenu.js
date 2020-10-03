import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    marginLeft: '20px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'white',
  },
}));

const LoggedOutNavMenu = () => {
  const classes = useStyles();

  return (
    <Box>
      <NavLink className={classes.link} to="/">
        Home
      </NavLink>
      <NavLink className={classes.link} to="/signup">
        SignUp
      </NavLink>
      <NavLink className={classes.link} to="/login">
        LogIn
      </NavLink>
    </Box>
  );
};

export default LoggedOutNavMenu;
