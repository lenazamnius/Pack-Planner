import React, { useState } from 'react';
import CategoryHeader from '../CategoryHeader';
import Button from '../../../components/Button';
import CategoryCardItem from '../CategoryCardItem';
import CategoryCardNewItem from '../CategoryCardNewItem';
import capitalize from '../../../helpers/helpersFunc';
import { selectOptionData } from '../../../data/selectData';
import './CategoryCard.css';

const CategoryCard = ({
  id,
  name,
  updateQuantity,
  categoryListData,
  updateGearListData,
  addCategoryNewItem,
  updateItemsAsPacked,
  updatePackedItemsArr,
}) => {
  const [addCategoryItemForm, setAddCategoryItemForm] = useState(false);

  const addCategoryItem = () => {
    setAddCategoryItemForm(true);
  };

  const saveCategoryNewItem = () => {
    setAddCategoryItemForm(false);
  };

  return (
    <div className="Category">
      <div className="CategoryWrapper">
        <CategoryHeader name={capitalize(name)} id={id} />
        <hr />
        {categoryListData.map((listItemData) => (
          <CategoryCardItem
            categoryId={id}
            key={listItemData.id}
            updateQuantity={updateQuantity}
            updateGearListData={updateGearListData}
            updateItemsAsPacked={updateItemsAsPacked}
            updatePackedItemsArr={updatePackedItemsArr}
            {...listItemData}
          />
        ))}
        {addCategoryItemForm && (
          <CategoryCardNewItem
            categoryId={id}
            categoryName={name}
            optionsList={selectOptionData[name.toLowerCase()]}
            addCategoryNewItem={addCategoryNewItem}
            saveCategoryNewItem={saveCategoryNewItem}
          />
        )}
        <div className="categoryFooter">
          <Button
            className="add-btn"
            label="Add Item"
            onClick={addCategoryItem}
            disabled={addCategoryItemForm}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
