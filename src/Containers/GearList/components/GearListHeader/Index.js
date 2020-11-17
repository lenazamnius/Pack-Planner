import React from 'react';
import { capitalize } from '../../../../helpers/helpersFunc';

const GearListHeader = ({ headerData }) => {
  return (
    <div className="mb">
      <div className="row">
        <div className="col s12 l7 push-l5 gl-header-bar">
          <div className="waves-effect waves-light btn-flat btn-small">
            Save title
          </div>
          <div className="waves-effect waves-light btn-flat btn-small ml">
            <i className="material-icons">clear</i>
          </div>
        </div>
        <h4 className="col s12 l5 pull-l7">{capitalize(headerData.title)}</h4>
      </div>

      <div className="row">
        <div className="col s12 m6 l4">Start date: {headerData.startDate}</div>
        <div className="col s12 m6 l4">End Date: {headerData.endDate}</div>
      </div>
      <div className="row">
        <div className="col s12 m4">Travel type: {headerData.type}</div>
        <div className="col s12 m4">Season: {headerData.season}</div>
        <div className="col s12 m4">Landscape: {headerData.landscape}</div>
      </div>
      <div className="row">
        <div className="col s12 m4">Description: {headerData.description}</div>
      </div>
    </div>
  );
};

export default GearListHeader;
