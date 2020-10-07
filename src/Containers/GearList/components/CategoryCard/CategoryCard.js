import React, { useState } from 'react';
import CategoryHeader from '../CategoryHeader';
import Button from '../../../../components/Button';
import CategoryCardItem from '../CategoryCardItem';
import CategoryCardNewItem from '../CategoryCardNewItem';
import { capitalize } from '../../../../helpers/helpersFunc';
import {
  selectOptionData,
  selectCategoryData,
} from '../../../../data/selectData';
import './CategoryCard.css';

const CategoryCard = ({
  id,
  name,
  updateQuantity,
  categoryListData,
  updateGearListData,
  addCategoryNewItem,
  updateItemsAsChecked,
  updateCheckedItemsArr,
  deleteCategoryHandler,
}) => {
  const [addCategoryItem, setAddCategoryItem] = useState(false);

  const addCategoryItemHandler = () => {
    setAddCategoryItem(true);
  };

  const saveCategoryNewItem = () => {
    setAddCategoryItem(false);
  };

  const deleteFormNewItem = () => {
    setAddCategoryItem(false);
  };

  return (
    <div className="Category">
      <div className="CategoryWrapper">
        <CategoryHeader
          id={id}
          name={capitalize(name)}
          optionsList={selectCategoryData}
          deleteCategoryHandler={deleteCategoryHandler}
        />
        <hr />
        {categoryListData &&
          categoryListData.map((listItemData) => (
            <CategoryCardItem
              categoryId={id}
              key={listItemData.id}
              updateQuantity={updateQuantity}
              updateGearListData={updateGearListData}
              updateItemsAsChecked={updateItemsAsChecked}
              updateCheckedItemsArr={updateCheckedItemsArr}
              {...listItemData}
            />
          ))}
        {addCategoryItem && (
          <CategoryCardNewItem
            categoryId={id}
            categoryName={name}
            deleteFormNewItem={deleteFormNewItem}
            addCategoryNewItem={addCategoryNewItem}
            saveCategoryNewItem={saveCategoryNewItem}
            optionsList={selectOptionData[name.toLowerCase()]}
          />
        )}
        <div className="categoryFooter">
          <Button
            className="add-btn"
            label="+ Add Item"
            onClick={addCategoryItemHandler}
            disabled={addCategoryItem}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
