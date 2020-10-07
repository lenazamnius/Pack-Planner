import React from 'react';
import './CategoryCardItem.css';
import Button from '../../../../components/Button';
import CheckBox from '../../../../components/CheckBox';
import { capitalize } from '../../../../helpers/helpersFunc';

const CategoryCardItem = ({
  id,
  qty,
  name,
  weight,
  packed,
  categoryId,
  updateQuantity,
  updateGearListData,
  updateItemsAsChecked,
  updateCheckedItemsArr,
}) => {
  const addOne = () => updateQuantity(id, qty + 1, categoryId);
  const subtractOne = () => updateQuantity(id, qty - 1, categoryId);
  const markAsChecked = () => updateItemsAsChecked(id, packed, categoryId);
  const deleteListItem = () => updateGearListData(id, categoryId);
  const addToCheckedItemsArr = () =>
    updateCheckedItemsArr(id, packed, categoryId);

  return (
    <div className={`CategoryCardItem ${packed ? 'packed' : ''}`}>
      <div className="card-item-col">{capitalize(name)}</div>
      <div className="card-item-col">{weight} kg</div>
      <div className="card-item-col">
        <Button
          className="qty-btn"
          onClick={subtractOne}
          disabled={qty <= 1}
          label="-"
        />
        {qty}
        <Button className="qty-btn" onClick={addOne} label="+" />
        piece
      </div>
      <div className="card-item-col">
        weight - {(qty * weight).toFixed(3)} kg
      </div>
      <div className="card-item-col last-column">
        <CheckBox
          type="checkbox"
          onClick={markAsChecked}
          onChange={addToCheckedItemsArr}
          defaultChecked={packed}
        />
        <Button className="del-btn" onClick={deleteListItem} label="x" />
      </div>
    </div>
  );
};

export default CategoryCardItem;
