import React, { useState, useEffect } from 'react';
import CategoryCard from '../CategoryCard';
import Button from '../../../../components/Button';
import { v4 as uuidv4 } from 'uuid';
import './CategoryListing.css';

export default function CategoryListing({ gearListData }) {
  const initialListData = JSON.parse(
    window.localStorage.getItem('gearListItems'),
  );
  const initialCheckedArr = JSON.parse(
    window.localStorage.getItem('checkedItems'),
  );
  const [gearListItems, setGearListItems] = useState(
    initialListData || gearListData,
  );
  const [checkedItems, setCheckedItems] = useState(initialCheckedArr || []);
  const [addNewCategoryCard, setAddingNewCategoryCard] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('gearListItems', JSON.stringify(gearListItems));
    window.localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [gearListItems, checkedItems]);

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
    const updatedCheckedArr = checkedItems.filter(
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
    setCheckedItems(updatedCheckedArr);
  };

  const updateItemsAsChecked = (id, packed, categoryId) => {
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

  const updateCheckedItemsArr = (itemId, packed, categoryId) => {
    const updatedArr = !packed
      ? [...checkedItems, { [categoryId]: itemId }]
      : checkedItems.filter((item) => item[categoryId] !== itemId);
    setCheckedItems(updatedArr);
  };

  const addCategory = () => {
    setAddingNewCategoryCard(true);
  };

  const deleteCategoryHandler = (categoryId) => {
    const newGearListItems = gearListItems.filter(
      (item) => item.id !== categoryId,
    );
    const updatedCheckedArr = checkedItems.filter(
      (item) => Object.keys(item)[0] !== categoryId,
    );

    setAddingNewCategoryCard(false);
    setGearListItems(newGearListItems);
    setCheckedItems(updatedCheckedArr);
  };

  return (
    <div className="CategoryListing">
      <div className="CategoryListingHeader">
        <Button
          className="add-btn"
          label="+ Add Category"
          onClick={addCategory}
          disabled={addNewCategoryCard}
        />
        <p className="TotalListWeight">Total Pack Weight: {totalWeight} kg</p>
      </div>
      {addNewCategoryCard && (
        <CategoryCard
          updateQuantity={updateQuantity}
          updateGearListData={updateGearListData}
          addCategoryNewItem={addCategoryNewItem}
          updateItemsAsChecked={updateItemsAsChecked}
          updateCheckedItemsArr={updateCheckedItemsArr}
          deleteCategoryHandler={deleteCategoryHandler}
        />
      )}
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
            updateItemsAsChecked={updateItemsAsChecked}
            updateCheckedItemsArr={updateCheckedItemsArr}
            deleteCategoryHandler={deleteCategoryHandler}
          />
        );
      })}
    </div>
  );
}
