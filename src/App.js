import React from "react";
// import CategoryCard from "./CategoryCard";

import "./App.css";

const gearListData = [
  {
    categoryName: "Shelter",
    id: "1catg",
    list: [
      { name: "Backpack", id: "1s", weight: 1.2, qty: 1 },
      { name: "Tent", id: "2s", weight: 1.67, qty: 1 },
      { name: "Sleeping bag", id: "3s", weight: 0.7, qty: 1 },
      { name: "Pillow", id: "4s", weight: 0.115, qty: 2 },
      { name: "Sleepeng pad", id: "5s", weight: 0.435, qty: 2 }
    ]
  }
];

export default function App() {
  const { categoryName, id, list } = gearListData[0];

  return (
    <div className="App">
      <h1>List page</h1>
      {/* <CategoryCard categoryListData={list} name={categoryName} id={id} /> */}
    </div>
  );
}
