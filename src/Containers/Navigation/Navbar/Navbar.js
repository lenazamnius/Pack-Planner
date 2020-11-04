import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoggedInMenu from '../LoggedInMenu';
import LoggedOutMenu from '../LoggedOutMenu/LoggedOutMenu';
import LoggedInSideMenu from '../LoggedInSideMenu/LoggedInSideMenu';
import LoggedOutSideMenu from '../LoggedOutSideMenu/LoggedOutSideMenu';
import { useSelector } from 'react-redux';
import M from 'materialize-css';

const NavBar = () => {
  const logged = useSelector((state) => {
    return state.firebase.auth;
  });

  useEffect(() => M.AutoInit());

  return (
    <div>
      <nav className="nav-wrapper blue-grey">
        <div className="container">
          <Link to="/" className="brand-logo">
            PackPlaner
          </Link>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          {logged.uid ? <LoggedInMenu /> : <LoggedOutMenu />}
        </div>
      </nav>
      {logged.uid ? <LoggedInSideMenu /> : <LoggedOutSideMenu />}
    </div>
  );
};

export default NavBar;
