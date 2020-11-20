import React from 'react';
import IconButton from '../../../../components/Buttons/IconButton';
import { capitalize } from '../../../../helpers/helpersFunc';

const GearListHeader = ({ headerData }) => {
  return (
    <div className="mb">
      <div className="row">
        <div className="col s12 l4 push-l8 gl-header-bar">
          <div className="waves-effect waves-teal btn-flat btn-small gl-header-save-btn">
            Save title
          </div>
          <IconButton />
        </div>
        <h4 className="col s12 l8 pull-l4">{capitalize(headerData.title)}</h4>
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
