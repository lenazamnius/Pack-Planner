import React from 'react';
import LoggedInMenu from '../LoggedInMenu';
import LoggedOutMenu from '../LoggedOutMenu/LoggedOutMenu';

const NavBar = () => {
  return (
    <nav className="blue-grey">
      <div className="nav-wrapper container">
        <a href="/home" className="brand-logo">
          PackPlaner
        </a>
        <LoggedInMenu />
        <LoggedOutMenu />
      </div>
    </nav>
  );
};

export default NavBar;
