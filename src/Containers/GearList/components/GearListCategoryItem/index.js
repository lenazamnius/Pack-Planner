import React from 'react';

const GearListCategoryItem = ({ itemData }) => {
  return (
    <div className="category-item">
      {itemData.name} - {itemData.weight} kg - {itemData.qty} items
      <label>
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
  );
};

export default GearListCategoryItem;
