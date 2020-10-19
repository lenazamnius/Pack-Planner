import React from 'react';
import { Link } from 'react-router-dom';

const GearListBoardHeader = () => {
  return (
    <div className="gear-list-board-header">
      <h5>You have 3 Packs</h5>
      <Link
        to="/create-gear-list"
        className="waves-effect waves-light btn-large cyan darken-2"
      >
        <i className="material-icons left">add</i>Create New Pack
      </Link>
    </div>
  );
};

export default GearListBoardHeader;
