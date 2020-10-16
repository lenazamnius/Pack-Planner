import React from 'react';
import GearListBoardCard from '../GearListBoardCard';
import GearListBoardHeader from '../GearListBoardHeader';

const GearListBoard = () => {
  return (
    <div className="container semitransparent-container">
      <GearListBoardHeader />
      <div className="divider blue-grey lighten-3"></div>
      <div className="row">
        <div className="col s12 m6 l4">
          <GearListBoardCard />
        </div>
        <div className="col s12 m6 l4">
          <GearListBoardCard />
        </div>
        <div className="col s12 m6 l4">
          <GearListBoardCard />
        </div>
      </div>
    </div>
  );
};

export default GearListBoard;
