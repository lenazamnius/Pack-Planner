import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../data/images/avatar.png';

const LoggedOutSideMenu = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <div className="user-view blue-grey">
          <div>
            <img className="circle" src={avatar} alt="no user avatar" />
          </div>
          <div className="px">
            <NavLink
              to="/login"
              className="waves-effect waves-light btn-flat white-text"
            >
              LogIn
            </NavLink>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/">
          <i className="material-icons">home</i> Home
        </NavLink>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li className="px">
        <NavLink
          to="/signup"
          className="waves-effect waves-light btn deep-purple lighten-2"
        >
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutSideMenu;
