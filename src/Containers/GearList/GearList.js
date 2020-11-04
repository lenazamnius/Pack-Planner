import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { capitalize } from '../../helpers/helpersFunc';
import M from 'materialize-css';

import { compose } from 'redux';
import { connect } from 'react-redux';

const GearList = () => {
  const { id } = useParams();
  const listData = useSelector((state) => {
    const lists = state.firestore.data.gearLists;
    const listInfo = lists ? lists[id] : null;
    return listInfo;
  });

  useEffect(() => M.AutoInit());

  if (listData) {
    return (
      <div className="container semitransparent-container">
        <h4>TITLE: {capitalize(listData.title)}</h4>
        <p>
          At {listData.season} {listData.landscape}
        </p>
        <p>List id - {id}</p>
        <ul className="collapsible">
          <li className="collection active">
            <div className="category-header">
              <div className="collapsible-header">
                <span className="collapsible-header-item">
                  <i className="material-icons">list</i>First Category Name{' '}
                </span>
                <span className="collapsible-header-item">
                  <div className="waves-effect expand">
                    <i className="material-icons expand">keyboard_arrow_up</i>
                  </div>
                </span>
              </div>
              <div className="waves-effect waves-red btn-delete">
                <i className="material-icons">clear</i>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="collection-item">
                first item{' '}
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
              <div className="collection-item">
                second item{' '}
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
              <div className="collection-item">
                third item{' '}
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
              <div className="collection-item">
                <div className="waves-effect waves-light btn">
                  <i className="material-icons left">add</i>Add New Item
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container semitransparent-container">
        <h4 className="px">Page is loading...</h4>
      </div>
    );
  }
};

export default firestoreConnect([{ collection: 'gearLists' }])(GearList);
