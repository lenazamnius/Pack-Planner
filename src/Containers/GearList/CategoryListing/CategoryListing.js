import React, { useState, useEffect } from 'react';
import CategoryCard from '../CategoryCard';
import CreateCategoryCard from '../CreateCategoryCard/CreateCategoryCard';
import { selectCategoryData } from '../../../data/selectData';
import { v4 as uuidv4 } from 'uuid';
import './CategoryListing.css';

export default function CategoryListing({ gearListData }) {
  const initialListData = JSON.parse(
    window.localStorage.getItem('gearListItems'),
  );
  const initialPackedArr = JSON.parse(
    window.localStorage.getItem('packedItems'),
  );
  const [gearListItems, setGearListItems] = useState(
    initialListData || gearListData,
  );
  const [categoryPackedItems, setCategoryPackedItems] = useState(
    initialPackedArr || [],
  );

  useEffect(() => {
    window.localStorage.setItem('gearListItems', JSON.stringify(gearListItems));
    window.localStorage.setItem(
      'packedItems',
      JSON.stringify(categoryPackedItems),
    );
  }, [gearListItems, categoryPackedItems]);

  const updateQuantity = (itemId, newQty, categoryId) => {
    const categoryIdx = gearListItems.findIndex(
      (category) => category.id === categoryId,
    );
    const newListItems = [...gearListItems];

    newListItems[categoryIdx].list.forEach((listItem) => {
      return listItem.id === itemId ? (listItem.qty = newQty) : listItem;
    });
    setGearListItems(newListItems);
  };

  const weightArr = gearListItems.map((category) => {
    return category.list.reduce(
      (total, item) => total + item.weight * item.qty,
      0,
    );
  });

  const totalWeight = weightArr
    .reduce((total, item) => total + item, 0)
    .toFixed(3);

  const addCategoryNewItem = (inputName, inputWeight, inputQty, categoryId) => {
    const newItemData = {
      name: inputName.toLowerCase(),
      id: uuidv4(),
      weight: Number(inputWeight),
      qty: Number(inputQty),
    };
    const newGearListItems = gearListItems.map((category) => {
      return category.id === categoryId
        ? { ...category, list: [...category.list, newItemData] }
        : { ...category };
    });
    setGearListItems(newGearListItems);
  };

  const updateGearListData = (id, categoryId) => {
    const updatedPackedArr = categoryPackedItems.filter(
      (item) => item[categoryId] !== id,
    );
    const newGearListItems = gearListItems.map((category) => {
      return category.id === categoryId
        ? {
            ...category,
            list: [...category.list.filter((item) => item.id !== id)],
          }
        : { ...category };
    });

    setGearListItems(newGearListItems);
    setCategoryPackedItems(updatedPackedArr);
  };

  const updateItemsAsPacked = (id, packed, categoryId) => {
    const newGearListItems = gearListItems.map((category) => {
      return category.id === categoryId
        ? {
            ...category,
            list: [
              ...category.list.map((item) => {
                return item.id === id ? { ...item, packed: !packed } : item;
              }),
            ],
          }
        : { ...category };
    });
    setGearListItems(newGearListItems);
  };

  const updatePackedItemsArr = (itemId, packed, categoryId) => {
    const updatedArr = !packed
      ? [...categoryPackedItems, { [categoryId]: itemId }]
      : categoryPackedItems.filter((item) => item[categoryId] !== itemId);
    setCategoryPackedItems(updatedArr);
  };

  return (
    <div className="CategoryListing">
      <p className="TotalListWeight">Total Pack Weight: {totalWeight} kg</p>
      {gearListItems.map((categoryData) => {
        const { id, categoryName, list } = categoryData;

        return (
          <CategoryCard
            id={id}
            key={id}
            name={categoryName}
            categoryListData={list}
            updateQuantity={updateQuantity}
            updateGearListData={updateGearListData}
            addCategoryNewItem={addCategoryNewItem}
            updateItemsAsPacked={updateItemsAsPacked}
            updatePackedItemsArr={updatePackedItemsArr}
          />
        );
      })}
      <CreateCategoryCard optionsList={selectCategoryData} />
    </div>
  );
}
