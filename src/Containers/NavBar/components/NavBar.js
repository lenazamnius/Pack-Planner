import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import LoggedNavMenu from './LoggedNavMenu';
import LoggedOutNavMenu from './LoggedOutNavMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: '20px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'white',
  },
}));

// const NavBar = ({ logged, logOut }) => {
const NavBar = ({ logged, setIsLogged }) => {
  const classes = useStyles();
  console.log('from navbar', logged);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className={classes.link} to="/">
            PackPlanner
          </NavLink>
          {logged ? (
            <LoggedNavMenu setIsLogged={setIsLogged} />
          ) : (
            <LoggedOutNavMenu />
          )}
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <DashboardIcon size="large" />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            PackPlanner
          </Typography> */}
          {/* {logged ? <LoggedNavMenu logOut={logOut} /> : <LoggedOutNavMenu />} */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
