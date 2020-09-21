import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import CategoryCardItem from '../CategoryCardItem';
import CategoryCardNewItem from '../CategoryCardNewItem';
import CategoryHeader from '../CategoryHeader';
import selectOptionData from '../../../data/selectOptionData';
import './CategoryCard.css';

const CategoryCard = ({ name, id, categoryListData }) => {
  const initialListData = JSON.parse(window.localStorage.getItem('listItems'));
  const initialPackedArr = JSON.parse(
    window.localStorage.getItem('packedItems'),
  );
  const [addCategoryItemForm, setAddCategoryItemForm] = useState(false);
  const [categoryPackedItems, setCategoryPackedItems] = useState(
    initialPackedArr || [],
  );
  const [listItems, setListItems] = useState(
    initialListData || categoryListData,
  );

  useEffect(() => {
    window.localStorage.setItem('listItems', JSON.stringify(listItems));
    window.localStorage.setItem(
      'packedItems',
      JSON.stringify(categoryPackedItems),
    );
  }, [listItems, categoryPackedItems]);

  const updateQuantity = (id, newQty) => {
    const newListItems = listItems.map((item) => {
      return item.id === id ? { ...item, qty: newQty } : item;
    });
    setListItems(newListItems);
  };

  const updateItemsAsPacked = (id, packed) => {
    const newListItems = listItems.map((item) => {
      return item.id === id ? { ...item, packed: !packed } : item;
    });
    setListItems(newListItems);
  };

  const updatePackedItemsArr = (itemId, packed, name) => {
    const updatedArr = !packed
      ? [...categoryPackedItems, { [name]: itemId }]
      : categoryPackedItems.filter((item) => item[name] !== itemId);
    console.log(updatedArr);
    setCategoryPackedItems(updatedArr);
  };

  const updateDataList = (id, name) => {
    const newListItems = listItems.filter((item) => item.id !== id);
    const updatePackedArr = categoryPackedItems.filter(
      (item) => item[name] !== id,
    );
    setListItems(newListItems);
    setCategoryPackedItems(updatePackedArr);
  };

  const addCategoryItem = () => {
    setAddCategoryItemForm(true);
  };

  const setCategoryNewItem = (inputName, inputWeight, inputQty) => {
    const newItemData = {
      name: inputName,
      id: uuidv4(),
      weight: Number(inputWeight),
      qty: Number(inputQty),
    };
    setListItems([...listItems, newItemData]);
    setAddCategoryItemForm(false);
  };

  const totalWeight = listItems
    .reduce((total, item) => total + item.weight * item.qty, 0)
    .toFixed(2);

  return (
    <div className="Category" key={id}>
      <div className="CategoryWrapper">
        <CategoryHeader name={name} id={id} />
        <hr />
        {listItems.map((listItemData) => (
          <CategoryCardItem
            key={listItemData.id}
            updateQuantity={updateQuantity}
            updateDataList={updateDataList}
            updateItemsAsPacked={updateItemsAsPacked}
            updatePackedItemsArr={updatePackedItemsArr}
            {...listItemData}
          />
        ))}
        {addCategoryItemForm && (
          <CategoryCardNewItem
            categoryName={name}
            optionsList={selectOptionData[name.toLowerCase()]}
            setCategoryNewItem={setCategoryNewItem}
          />
        )}
        <div className="categoryFooter">
          <Button
            className="add-btn"
            onClick={addCategoryItem}
            label="Add Item"
            disabled={addCategoryItemForm}
          />
        </div>
      </div>
      <p className="TotalListWeight">Total Weight: {totalWeight} kg</p>
    </div>
  );
};

export default CategoryCard;
