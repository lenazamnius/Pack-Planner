import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import firebase from '../../firebase/config';
import CategoryListing from './components/CategoryListing';
import GearListHeader from './components/GearListHeader';

const GearList = (props) => {
  const getPackInfo = (arr, packId) => arr.find((pack) => pack.id === packId);

  const { id } = useParams();
  const { gearLists } = props;
  const { categoryListing, ...headerInfo } = getPackInfo(gearLists, id);

  return (
    <div className="GearList">
      <div>
        User: {firebase.getUserCurrentName()}, id: {id}
      </div>
      <GearListHeader headerInfo={headerInfo} />
      <CategoryListing gearListData={categoryListing} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gearLists: state.gearLists.gearLists,
  };
};

export default connect(mapStateToProps)(GearList);
