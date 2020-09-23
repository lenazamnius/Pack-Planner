import React from 'react';
import CategoryListing from './Containers/GearList/CategoryListing/CategoryListing';

import gearListData from './data/gearListData';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Hiking Gear Checklists header</h1>
      <CategoryListing gearListData={gearListData} />
    </div>
  );
}
