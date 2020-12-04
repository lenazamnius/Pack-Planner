import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { actionTypes } from 'redux-firestore';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import GearListHeader from './components/GearListHeader/Index';
import RenderPreloader from '../../components/RenderPreloader';
import GearListBody from './components/GearListBody';

const GearList = () => {
  const { id: listId } = useParams();
  const dispatch = useDispatch();

  useFirestoreConnect([
    {
      collection: 'gearLists',
      doc: listId,
      storeAs: 'openedListData',
    },
    {
      collection: `gearLists/${listId}/categoryListing`,
      orderBy: 'createdAt',
      storeAs: 'categoriesData',
    },
  ]);

  const listData = useSelector(({ firestore: { data } }) => {
    return data && data.openedListData;
  });

  const categoryListing = useSelector(({ firestore: { ordered } }) => {
    return ordered && ordered.categoriesData;
  });

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.CLEAR_DATA });
    };
  }, [dispatch]);

  if (listData && categoryListing) {
    return (
      <div className="container mt">
        <GearListHeader headerData={listData} />
        <GearListBody
          listUnit={listData.unit}
          categoryListing={categoryListing}
        />
      </div>
    );
  } else {
    return <RenderPreloader />;
  }
};

export default GearList;
