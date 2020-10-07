import React, { useState, useEffect } from 'react';
import CategoryCard from '../CategoryCard';
import Button from '../../../../components/Button';
import { totalWeight } from '../../../../helpers/helpersFunc';
import { v4 as uuidv4 } from 'uuid';
import './CategoryListing.css';

const CategoryListing = ({ gearListData }) => {
  // const initialListData = JSON.parse(
  //   window.localStorage.getItem('gearListItems'),
  // );
  // const initialCheckedArr = JSON.parse(
  //   window.localStorage.getItem('checkedItems'),
  // );
  // const [gearListItems, setGearListItems] = useState(
  //   initialListData || gearListData,
  // );
  // const [checkedItems, setCheckedItems] = useState(initialCheckedArr || []);
  // useEffect(() => {
  //   window.localStorage.setItem('gearListItems', JSON.stringify(gearListItems));
  //   window.localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  // }, [gearListItems, checkedItems]);

  const [gearListItems, setGearListItems] = useState(gearListData);
  const [checkedItems, setCheckedItems] = useState([]);
  const [addNewCategoryCard, setAddNewCategoryCard] = useState(false);

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
    setAddNewCategoryCard(true);
  };

  const deleteCategoryHandler = (categoryId) => {
    const newGearListItems = gearListItems.filter(
      (item) => item.id !== categoryId,
    );
    const updatedCheckedArr = checkedItems.filter(
      (item) => Object.keys(item)[0] !== categoryId,
    );

    setAddNewCategoryCard(false);
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
        <p className="TotalListWeight">
          Total Pack Weight: {gearListItems ? totalWeight(gearListItems) : 0} kg
        </p>
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
      {gearListItems &&
        gearListItems.map((categoryData) => {
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
};

export default CategoryListing;
