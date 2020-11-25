import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { capitalize } from '../../../../helpers/helpersFunc';
import { logOut } from '../../../../store/actions/authActions';
import { createGearList } from '../../../../store/actions/gearListActions';
import image from '../../../../data/images/mountain.jpg';
import { v4 as uuidv4 } from 'uuid';
import './LoggedInSideMenu.css';

const LoggedInSideMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.firebase.profile);

  const handleLogOut = () => dispatch(logOut());

  const handleCreateList = () => {
    const newListId = uuidv4();

    dispatch(createGearList(newListId, history));
  };

  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <div className="user-view blue-grey">
          <div>
            <img className="circle" src={image} alt="user" />
          </div>
          <div>
            <span className="white-text name">{capitalize(userData.name)}</span>
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
        <div onClick={handleCreateList} className="sidenav-close">
          <i className="material-icons">add</i> CreateGearList
        </div>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li className="px">
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
