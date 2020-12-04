import React, { useEffect } from 'react';
import { actionTypes } from 'redux-firestore';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import RenderPreloader from '../../components/RenderPreloader';
import GearListBoardCard from './components/GearListBoardCard';
import GearListBoardHeader from './components/GearListBoardHeader';

const GearListBoard = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ firebase: { auth } }) => {
    return auth && auth.uid;
  });

  useFirestoreConnect([
    {
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'gearListing' }],
      storeAs: 'allUserLists',
    },
  ]);

  const gearLists = useSelector(({ firestore: { ordered } }) => {
    return ordered && ordered.allUserLists;
  });

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.CLEAR_DATA });
    };
  }, [dispatch]);

  if (!gearLists) {
    return <RenderPreloader />;
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

export default GearListBoard;
