import React from 'react';
import CategoryListing from './components/CategoryListing/';
import GearListHeader from './components/GearListHeader';
import gearListData from '../../data/gearListData';
import { useParams } from 'react-router';

const GearList = () => {
  const { user, id } = useParams();
  const { categoryListing, ...headerInfo } = gearListData;

  return (
    <div className="GearList">
      <div>
        User: {user}, id: {id}
      </div>
      <GearListHeader headerInfo={headerInfo} />
      <CategoryListing gearListData={categoryListing} />
    </div>
  );
};

export default GearList;
