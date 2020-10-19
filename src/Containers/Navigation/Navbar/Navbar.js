import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInMenu from '../LoggedInMenu';
import LoggedOutMenu from '../LoggedOutMenu/LoggedOutMenu';

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to="/" className="brand-logo">
          PackPlaner
        </Link>
        <LoggedInMenu />
        <LoggedOutMenu />
      </div>
    </nav>
  );
};

export default NavBar;
