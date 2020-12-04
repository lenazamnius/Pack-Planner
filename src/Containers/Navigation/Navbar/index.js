import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInMenu from '../components/LoggedInMenu';
import LoggedOutMenu from '../components/LoggedOutMenu';
import LoggedInSideMenu from '../components/LoggedInSideMenu';
import LoggedOutSideMenu from '../components/LoggedOutSideMenu';
import book from '../../../routes/book';
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
          <Link to={book.home} className="brand-logo">
            PackPlaner
          </Link>
          <a
            href={book.home}
            data-target="mobile-demo"
            className="sidenav-trigger"
          >
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
