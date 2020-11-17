import React from 'react';
import { capitalize } from '../../../../helpers/helpersFunc';

const GearListCategoryHeader = ({ title }) => {
  return (
    <div className="gl-category-header">
      <div className="collapsible-header-item">
        <i className="material-icons">list</i>
        <span className="gl-category-title">{capitalize(title)}</span>
      </div>
      <div className="collapsible-header-item">
        <div className="waves-effect btn-flat expand collapsible-header">
          <i className="material-icons expand">keyboard_arrow_up</i>
        </div>
        <div className="waves-effect btn-flat waves-red">
          <i className="material-icons">clear</i>
        </div>
      </div>
    </div>
  );
};

export default GearListCategoryHeader;
