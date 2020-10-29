import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../../store/actions/authActions';

const LoggedInMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

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
          onClick={handleLogOut}
          className="waves-effect waves-light btn deep-orange lighten-3"
        >
          LogOut
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
