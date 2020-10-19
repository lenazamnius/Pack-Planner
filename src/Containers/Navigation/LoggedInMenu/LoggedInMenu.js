import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInMenu = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/gear-list-board">MyGearLists</NavLink>
      </li>
      <li>
        <NavLink to="/create-gear-list">CreateGearList</NavLink>
      </li>
      <li>
        <NavLink
          to="/gear-list-board"
          className="btn-floating btn waves-effect waves-light"
        >
          LZ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="waves-effect waves-light btn deep-orange lighten-3"
        >
          LogOut
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
