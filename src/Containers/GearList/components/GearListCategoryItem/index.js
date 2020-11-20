import React from 'react';
import IconButton from '../../../../components/Buttons/IconButton';

const GearListCategoryItem = ({ itemData }) => {
  return (
    <div className="gl-category-item row">
      <div className="col s4">{itemData.name}</div>
      <div className="col s3">{itemData.weight} kg</div>
      <div className="col s3">{itemData.qty} items</div>
      <div className="col s2 last-col">
        <label>
          <input type="checkbox" />
          <span></span>
        </label>
        <IconButton />
      </div>
    </div>
  );
};

export default GearListCategoryItem;
