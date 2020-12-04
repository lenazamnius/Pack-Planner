import React from 'react';
import { NavLink } from 'react-router-dom';
import book from '../../../../routes/book';

const LoggedOutMenu = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to={book.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={book.login} className="waves-effect waves-light btn">
          LogIn
        </NavLink>
      </li>
      <li>
        <NavLink
          to={book.signup}
          className="waves-effect waves-light btn deep-purple lighten-2"
        >
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutMenu;
