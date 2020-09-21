import React from 'react';
import CategoryListing from './Containers/GearList/CategoryListing/CategoryListing';
import './App.css';

const gearListData = [
  {
    categoryName: 'Shelter',
    id: '1catg',
    list: [
      { name: 'Backpack', id: '1s', weight: 1.2, qty: 1 },
      { name: 'Tent', id: '2s', weight: 1.67, qty: 1 },
      { name: 'Sleeping bag', id: '3s', weight: 0.7, qty: 1 },
      { name: 'Pillow', id: '4s', weight: 0.115, qty: 2 },
      { name: 'Sleeping pad', id: '5s', weight: 0.435, qty: 2 },
    ],
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>Gear List page</h1>
      <CategoryListing gearListData={gearListData[0]} />
    </div>
  );
}
