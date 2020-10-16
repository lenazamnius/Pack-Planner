import React from 'react';

const LoggedInMenu = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/gear-list-board">MyGearLists</a>
      </li>
      <li>
        <a href="/create-gear-list">CreateGearList</a>
      </li>
      <li>
        <a
          className="btn-floating btn waves-effect waves-light"
          href="/gear-list-board"
        >
          LZ
        </a>
      </li>
      <li>
        <a
          href="/logout"
          className="waves-effect waves-light btn deep-orange lighten-3"
        >
          LogOut
        </a>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
