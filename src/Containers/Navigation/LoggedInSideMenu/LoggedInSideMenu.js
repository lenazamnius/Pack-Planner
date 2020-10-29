import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/authActions';
import image from '../../../data/images/mountain.jpg';

const LoggedInSideMenu = () => {
  const userData = {
    name: 'Lena Zamnius',
    email: 'lena.zamnius@gamail.com',
  };

  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <div className="user-view blue-grey">
          <div>
            <img className="circle" src={image} alt="user" />
          </div>
          <div>
            <span className="white-text name">{userData.name}</span>
          </div>
          <div>
            <span className="white-text email">{userData.email}</span>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/" className="sidenav-close">
          <i className="material-icons">home</i> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/gear-list-board" className="sidenav-close">
          <i className="material-icons">dashboard</i> MyGearLists
        </NavLink>
      </li>
      <li>
        <NavLink to="/create-gear-list" className="sidenav-close">
          <i className="material-icons">add</i> CreateGearList
        </NavLink>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <NavLink
          to="/login"
          onClick={handleLogOut}
          className="sidenav-close waves-effect waves-light btn-small deep-orange lighten-3"
        >
          LogOut
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInSideMenu;
