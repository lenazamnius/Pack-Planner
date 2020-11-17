import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import GearListHeader from './components/GearListHeader/Index';
import RenderPreloader from '../../components/RenderPreloader';
import GearListBody from './components/GearListBody';

const GearList = () => {
  const { id } = useParams();

  useFirestoreConnect([
    {
      collection: 'gearLists',
      doc: id,
      storeAs: 'openedList',
    },
  ]);

  const listData = useSelector(({ firestore: { data } }) => {
    return data && data.openedList;
  });

  if (listData) {
    return (
      <div className="container mt">
        <GearListHeader headerData={listData} />
        <GearListBody />
      </div>
    );
  } else {
    return <RenderPreloader />;
  }
};

export default GearList;
