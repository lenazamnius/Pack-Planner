import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../../store/actions/authActions';
import { createGearList } from '../../../../store/actions/gearListActions';
import book from '../../../../routes/book';
import { v4 as uuidv4 } from 'uuid';
import './LoggedInMenu.css';

const LoggedInMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.firebase.profile.name);

  const handleCreateList = () => {
    const newListId = uuidv4();

    dispatch(createGearList(newListId, history));
  };

  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to={book.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={book.listsBoard}>My GearLists</NavLink>
      </li>
      <li>
        <div className="gl-nav-element" onClick={handleCreateList}>
          Create GearList
        </div>
      </li>
      <li>
        <NavLink
          to={book.listsBoard}
          className="btn-floating btn waves-effect waves-light"
        >
          {userData && userData[0]}
        </NavLink>
      </li>
      <li>
        <div
          onClick={() => dispatch(logOut(history))}
          className="waves-effect waves-light btn deep-orange lighten-3"
        >
          LogOut
        </div>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
