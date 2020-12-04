import React from 'react';
import GearListCategoryBody from '../GearListCategoryBody';
import './GearListBody.css';

const GearListBody = ({ listUnit, categoryListing }) => {
  return (
    <div>
      {categoryListing &&
        categoryListing.map((category) => {
          return (
            <GearListCategoryBody
              key={category.id}
              categoryData={category}
              listUnit={listUnit}
            />
          );
        })}
    </div>
  );
};

export default GearListBody;
