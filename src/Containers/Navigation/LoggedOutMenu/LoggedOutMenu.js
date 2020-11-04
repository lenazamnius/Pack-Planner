import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutMenu = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="waves-effect waves-light btn">
          LogIn
        </NavLink>
      </li>
      <li>
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

export default LoggedOutMenu;
