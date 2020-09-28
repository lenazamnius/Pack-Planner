import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <DashboardIcon />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h4" className={classes.title}>
            PackPlanner
          </Typography>
          <div>
            <NavLink className={classes.link} to="/">
              About
            </NavLink>
            {/* <NavLink className={classes.link} to="/gear-list/LenaZamnius/25t62">
              GearList
            </NavLink> */}
            <NavLink className={classes.link} to="/gear-list-board">
              ListBoard
            </NavLink>
            <NavLink className={classes.link} to="/login">
              Login
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
