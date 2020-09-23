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
  // const initialListData = JSON.parse(window.localStorage.getItem('listItems'));
  // const initialPackedArr = JSON.parse(
  //   window.localStorage.getItem('packedItems'),
  // );
  // const [listItems, setListItems] = useState(
  //   initialListData || categoryListData,
  // );
  // const [categoryPackedItems, setCategoryPackedItems] = useState(
  //   initialPackedArr || [],
  // );

  // useEffect(() => {
  //   // window.localStorage.setItem('listItems', JSON.stringify(listItems));
  //   window.localStorage.setItem(
  //     'packedItems',
  //     JSON.stringify(categoryPackedItems),
  //   );
  // }, [categoryPackedItems]);

  // const totalWeight = listItems
  //   .reduce((total, item) => total + item.weight * item.qty, 0)
  //   .toFixed(2);

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
            categoryName={name}
            optionsList={selectOptionData[name.toLowerCase()]}
            addCategoryNewItem={addCategoryNewItem}
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
    </div>
  );
};

export default CategoryCard;
