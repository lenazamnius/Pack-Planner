import React from 'react';
import GearListBoardCard from '../GearListBoardCard';
import GearListBoardHeader from '../GearListBoardHeader';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { compose } from 'redux';
import { connect } from 'react-redux';

const GearListBoard = () => {
  const gearLists = useSelector((state) => {
    return state.firestore.ordered.userLists;
  });

  if (!gearLists) {
    return (
      <div className="container semitransparent-container">
        <div className="row px">
          <h4>Page is loading..</h4>
        </div>
      </div>
    );
  }
  if (gearLists.length === 0) {
    return (
      <div className="container semitransparent-container">
        <GearListBoardHeader />
        <div className="divider grey lighten-2"></div>
        <div className="row">
          <h6>Create your first one.</h6>
        </div>
      </div>
    );
  } else {
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
      </div>
    );
  }
};

export default compose(
  connect((state) => ({ auth: state.firebase.auth })),
  firestoreConnect((props) => {
    return [
      {
        collection: 'users',
        doc: props.auth.uid,
        subcollections: [{ collection: 'gearListing' }],
        storeAs: 'userLists',
      },
    ];
  }),
)(GearListBoard);
