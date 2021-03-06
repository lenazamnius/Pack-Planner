import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../../data/images/avatar.png';
import book from '../../../../routes/book';
import './LoggedOutSideMenu.css';

const LoggedOutSideMenu = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <div className="user-view blue-grey">
          <div className="pl">
            <img className="circle" src={avatar} alt="no user avatar" />
          </div>
          <div className="px">
            <NavLink
              to={book.login}
              className="sidenav-close waves-effect waves-light btn-flat white-text btn-sidenav-login"
            >
              LogIn
            </NavLink>
          </div>
        </div>
      </li>
      <li>
        <NavLink to={book.home} className="sidenav-close">
          <i className="material-icons">home</i> Home
        </NavLink>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li className="px">
        <NavLink
          to={book.signup}
          className="sidenav-close waves-effect waves-light btn-small deep-purple lighten-2"
        >
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutSideMenu;
