import React from 'react';
import GearListBoardCard from '../GearListBoardCard';
import GearListBoardHeader from '../GearListBoardHeader';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const GearListBoard = () => {
  const gearLists = useSelector((state) => {
    // console.log(state);
    // return state.gearLists.gearLists;
    return state.firestore.ordered.gearLists;
  });

  return (
    <div className="container semitransparent-container">
      <GearListBoardHeader />
      <div className="divider grey lighten-2"></div>
      <div className="row">
        {gearLists &&
          gearLists.map((list) => {
            return <GearListBoardCard key={list.id} data={list} />;
          })}
      </div>
      {(!gearLists || gearLists.length === 0) && (
        <div className="row">
          <h6>Create your first one.</h6>
        </div>
      )}
    </div>
  );
};

/* const mapStateToProps = (state) => {
   return {
     gearLists: state.gearLists.gearLists,
   };
 }; */

export default firestoreConnect([{ collection: 'gearLists' }])(GearListBoard);
