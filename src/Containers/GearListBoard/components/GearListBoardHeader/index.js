import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createGearList } from '../../../../store/actions/gearListActions';
import { v4 as uuidv4 } from 'uuid';
import './GearListBoardHeader.css';

const GearListBoardHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const gearLists = useSelector(
    ({ firestore: { ordered } }) => ordered.allUserLists,
  );

  const gearListsCount = gearLists ? gearLists.length : '0';

  const handleCreateList = () => {
    const newListId = uuidv4();

    dispatch(createGearList(newListId, history));
  };

  return (
    <div className="gl-board-header">
      <h5>
        You have {gearListsCount} pack{gearListsCount === 1 ? '' : 's'}
      </h5>
      <div
        className="waves-effect waves-light btn-large cyan darken-2"
        onClick={handleCreateList}
      >
        <i className="material-icons left">add</i>
        Create New Pack
      </div>
    </div>
  );
};

export default GearListBoardHeader;
