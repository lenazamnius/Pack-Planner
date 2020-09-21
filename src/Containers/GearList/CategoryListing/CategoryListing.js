import React, { useState } from 'react';
import CategoryCard from '../CategoryCard';
import CategoryNewCard from '../CategoryNewCard/CategoryNewCard';

export default function CategoryListing({ gearListData }) {
  const { categoryName, id, list } = gearListData;

  return (
    <div className="CategoryListing">
      <CategoryCard categoryListData={list} name={categoryName} id={id} />
      <CategoryNewCard />
    </div>
  );
}
