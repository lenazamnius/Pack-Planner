import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GearListBoardHeader = () => {
  const gearLists = useSelector((state) => state.firestore.ordered.userLists);
  const gearListsCount = gearLists ? gearLists.length : '0';

  return (
    <div className="gear-list-board-header">
      <h5>
        You have {gearListsCount} pack{gearListsCount === 1 ? '' : 's'}
      </h5>
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
